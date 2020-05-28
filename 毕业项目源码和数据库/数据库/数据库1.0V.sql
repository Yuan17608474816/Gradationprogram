--十安私人医生数据库
use master
go
if exists(select*from master.dbo.sysdatabases where name='TA_Doctor')
drop database TA_Doctor
go
create database TA_Doctor
go
use TA_Doctor
--地区表
----省份表
create table Province(
ProID int primary key identity(1,1),
Pro_Name varchar(40) not null
)
go 
----市区表
create table City(
CityID int primary key identity(1,1),
ProID int not null,
City_Name varchar(40) not null
)
go 
alter table City
add
----所在省份
constraint FK_City_Pro foreign key(ProID) references Province(ProID)
on delete cascade on update cascade
go
----县级表
create table County(
CouID int primary key identity(1,1),
CityID int not null,
Cou_Name varchar(40) not null
)
go
alter table County
add
----所属市区
constraint FK_Cou_City foreign key(CityID) references City(CityID)
on delete cascade on update cascade
--医院
----医院信息表
create table Hospitals(
HID int primary key identity(1,1),
ProID int not null,
CityID  int not null,
CouID int not null,
H_Name varchar(40) not null,
H_rate int,
H_Remark varchar(400) not null
)
go 
alter table Hospitals
add 
Constraint FK_Hos_Pro foreign key(ProID) references Province(ProID),
Constraint FK_Hos_City foreign key(CityID) references City(CityID),
Constraint FK_Hos_Cou foreign key(CouID) references County(CouID)
go
----医院设备表
create table HosEquipments(
HeID int primary key identity(1,1),
HID int not null,
He_Name varchar(60) not null,
He_Remax varchar(400) not null
)
go
alter table HosEquipments
add
constraint FK_He_Hos foreign key(HID) references Hospitals(HID)
on update cascade on delete cascade
go
----医院科室表
create table Adm_Offs(
AOID int primary key identity(1,1),
HID int not null,
AO_Name varchar(40) not null,
AO_Location varchar(100) not null,
AO_Remark varchar(400)
)
go 
alter table Adm_Offs
add
constraint FK_Adm_Hos foreign key(HID) references Hospitals(HID)
on update cascade on delete cascade
go
----医院门诊表
create table OutPatientDep(
ODID int primary key identity(1,1),
AOID int not null,
OD_Location varchar(100) not null
)
go 
alter table OutPatientDep
add
constraint FK_OD_Adm foreign key(AOID) references Adm_Offs(AOID)
on update cascade on delete cascade
go
----医院医生表
create table HosDoctors(
HDID int primary key identity(1,1),
AOID int not null,
HD_Name varchar(40) not null,
HD_Sex int not null,
HD_Phone char(11) not null,
HD_Photo varchar(200) not null,
HD_Age int not null,
HD_Remark varchar(400) not null,
HD_Money money not null,
HD_WorkYears int not null,
HD_VisitNum int not null
)
go 
alter table HosDoctors
add 
Constraint FK_Doc_Adm foreign key(AOID) references Adm_Offs(AOID)
on update cascade on delete cascade
go
----医生出诊表
create table VisitTime(
VTID int primary key identity(1,1),
HDID int not null,
VT_Time int not null,
DateVisit int not null
)
go 
alter table VisitTime 
add
Constraint FK_VT_Doc foreign key(HDID) references HosDoctors(HDID)
on update cascade on delete cascade
go
----医生职称表
create table ProQualif(
PQID int primary key identity(1,1),
HID int not null,
HDID int not null,
PQ_Name varchar(20) not null
)
go
alter table ProQualif
add
constraint FK_PQ_Hos foreign key(HID) references Hospitals(HID),
constraint FK_PQ_Doc foreign key(HDID) references HosDoctors(HDID)
go
--患者
----患者表
create table Patients(
PID int primary key identity(1,1),
P_Name varchar(40) not null,
P_Account varchar(20) not null,
P_RegType int not null,
P_Password varchar(20) not null,
P_Sex int not null,
P_Phone char(11) not null,
P_IdNum varchar(20) not null,
P_Birthday date not null
)
----审核表
create table [Audit](
Aid int primary key identity(1,1),
PID int not null,
HDID int not null,
Ad_Sate int not null,
Ad_Reason varchar(400) not null,
Ad_File varchar(100)
)
go
alter table [Audit]
add 
--与患者表的关系
constraint FK_Aud_Pat foreign key(PID) references Patients(PID)
on update cascade on delete cascade,--设置级联更新和删除
--审核的医生
constraint FK_Aud_HD foreign key(HDID) references HosDoctors(HDID)
go
----病例档案
create table MedRecordes(
MRID int primary key identity(1,1),
PID int not null,
HID int not null,
AOID int not null,
HDID int not null,
MR_Time date not null,
MR_Remark varchar(400) not null
)
go 
alter table MedRecordes
add
Constraint FK_Med_PT foreign key(PID) references Patients(PID)
on delete cascade,
Constraint FK_Med_Hos foreign key(HID) references Hospitals(HID),
Constraint FK_Med_Adm foreign key(AOID) references Adm_Offs(AOID),
Constraint FK_Med_Doc foreign key(HDID) references HosDoctors(HDID)
go
----问诊记录
create table InterRecord(
IRID int primary key identity(1,1),
HID int not null,
PID int not null,
IR_H_talks varchar(400),
IR_P_talks varchar(400),
IR_Remark varchar(400)
)
go
alter table InterRecord
add 
constraint FK_IR_Hos foreign key(HID) references Hospitals(HID),
constraint FK_IR_PT foreign key(PID) references Patients(PID)
go
--身体
----身体部位表
create table BodyParts(
BPID int primary key identity(1,1),
BP_Name varchar(40),
)
----具体部位
create table SpeSite(
SSID int primary key identity(1,1),
BPID int not null,
SS_Name varchar(40) not null
)
go
alter table SpeSite 
add 
constraint FK_SS_BP foreign key(BPID) references BodyParts(BPID)
on delete cascade
go
----初始病症表
create table Symptom(
SymID int primary key identity(1,1),
BPID int not null,
Sym_Remark varchar(400) not null
)
go
alter table Symptom add
constraint FK_Sym_BP foreign key(BPID) references BodyParts(BPID)
go
-----具体病症表
create table SymDes(
SDID int primary key identity(1,1),
SymID int not null,
SD_Remark varchar(400) not null
)
go
alter table SymDes add
constraint FK_SD_Sym foreign key(SymID) references Symptom(SymID)
on delete cascade
go
----疾病库
create table illness(
illD int primary key identity(1,1),
SymID int not null,
SDID int not null,
il_Name varchar(40) not null
)
go
alter table illness add
constraint FK_ill_Sym foreign key(SymID) references Symptom(SymID),
constraint FK_ill_SD foreign key(SDID) references SymDes(SDID)
go
--药物
----药品类型
create table MedType(
MTID int primary key identity(1,1),
MT_Name varchar(40) not null
)
go
----药物表
create table Medicines(
MID int primary key identity(1,1),
M_Name varchar(100) not null,
MTID int not null,
M_link varchar(200)
)
go
alter table Medicines add
constraint FK_Md_MT foreign key(MTID) references MedType(MTID)
on delete cascade on update cascade
go
----药物介绍
create table DrugDuc(
DrID int primary key identity(1,1),
MID int not null,
M_OrienSym varchar(400) not null,
M_Usage varchar(400) not null,
M_Sperci varchar(400) not null,
M_Depot varchar(200) not null,
M_Manuf varchar(100) not null,
M_Photos varchar(100) ,
M_Remark varchar(400) not null
)
go
alter table DrugDuc add
constraint FK_DD_MD foreign key(MID) references Medicines(MID) 
on delete cascade
go
----药物不良反应
create table AdvRea(
ARID int primary key identity(1,1),
MID int not null,
AR_Remark varchar(400) not null
)
go
alter table AdvRea add 
constraint FK_AR_MD foreign key(MID) references Medicines(MID)
on delete cascade
go
----药物生产表
create table AvaDate(
ADID int primary key identity(1,1),
MID int not null,
AD_DateMan date not null,
AD_PerOfVal date not null
)
go
alter table AvaDate add
constraint FK_AD_MD foreign key(MID) references Medicines(MID)
on delete cascade
go
----禁忌症
create table Contrain(
CtID int primary key identity(1,1),
MID int not null,
CT_Remark varchar(400) not null
)
go 
alter table Contrain add
Constraint  FK_CT_MD foreign key(MID) references Medicines(MID)
on delete cascade
go
----注意事项
create table MatNeetAt(
MNID int primary key identity(1,1),
MID int not null,
MN_Remark varchar(400) not null
)
go
alter table MatNeetAt add
Constraint  FK_MN_MD foreign key(MID) references Medicines(MID)
on delete cascade
go
----用药人群
create table UserCrowd(
UCID int primary key identity(1,1),
MID int not null,
UC_Remark varchar(400) not null
)
go
alter table UserCrowd add
Constraint  FK_UC_MD foreign key(MID) references Medicines(MID)
on delete cascade
go