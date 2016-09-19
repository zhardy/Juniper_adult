drop table if exists Users CASCADE;
drop table if exists Passwords CASCADE;
drop table if exists Writers CASCADE;
drop table if exists CraftSessions CASCADE;
drop table if exists Readings CASCADE;
drop table if exists Workshops CASCADE;
drop table if exists Content CASCADE;
drop table if exists Images CASCADE;
drop table if exists Sponsors CASCADE;
drop table if exists UserToPassword CASCADE;
drop table if exists WritersToDetails CASCADE;
drop table if exists WritersToCraftSessions CASCADE;
drop table if exists WritersToReadings CASCADE;
drop table if exists WritersToWorkshops CASCADE;
drop table if exists CraftSessionsToContent CASCADE;
drop table if exists WorkshopsToContent CASCADE;
drop table if exists SponsorToDetails CASCADE;

create table Users (
  Username varchar(50),
  UserID SERIAL,
  primary key (UserID)
);

create table Passwords (
  PasswordID serial,
  Password varchar,
	primary key (PasswordID)
);

create table Writers (
  WriterID SERIAL,
  WriterName varchar,
  WriterType varchar,
  primary key (WriterID)
);

create table CraftSessions(
  CraftSessionID serial,
  CraftSessionName varchar,
  primary key (CraftSessionID)
);

create table Readings (
  ReadingID SERIAL,
  ReadingDate date,
  primary key (ReadingID)
);

create table Workshops (
  WorkshopID SERIAL,
  WorkshopName varchar,
  primary key (WorkshopID)
);

create table Content (
  ContentID serial,
  Description varchar,
  primary key (ContentID)
);

create table Images(
  ImageID serial,
  ImagePath varchar,
  primary key (ImageID)
);

create table Sponsors(
  SponsorID serial,
  Name varchar,
  Link varchar,
  primary key (SponsorID)
);

create table UserToPassword (
  UserToPasswordID serial,
  UserID int,
  PasswordID int,
  foreign key (UserID) references Users,
  foreign key (PasswordID) references Passwords,
  primary key (UserToPasswordID)
);

create table WritersToDetails(
  WriterToDetailsID serial,
  WriterID int,
  ImageID int,
  ContentID int,
  StaffingType varchar,
  foreign key (WriterID) references Writers,
  foreign key (ImageID) references Images,
  foreign key (ContentID) references Content,
  primary key (WriterToDetailsID)
);

create table WritersToCraftSessions(
  WriterToCraftSessionID serial,
  ContentID int,
  WriterID int,
  foreign key (ContentID) references Content,
  foreign key (WriterID) references Writers,
  primary key (WriterToCraftSessionID)
);

create table WritersToReadings(
  WritersToReadingID SERIAL,
  WriterID int,
  ReadingID int,
  foreign key (WriterID) references Writers,
  foreign key (ReadingID) references Readings,
  primary key (WritersToReadingID)
);

create table WritersToWorkshops(
  WritersToWorkshopID SERIAL,
  WriterID int,
  WorkshopID int,
  foreign key (WriterID) references Writers,
  foreign key (WorkshopID) references Workshops,
  primary key (WritersToWorkshopID)
);

create table CraftSessionsToContent(
  CraftSessionToContentID serial,
  CraftSessionID int,
  ContentID int,
  foreign key (CraftSessionID) references CraftSessions,
  foreign key (ContentID) references Content,
  primary key (CraftSessionToContentID)
);

create table WorkshopsToContent(
  WorkshopToContentID SERIAL,
  ContentID int,
  WorkshopID int,
  foreign key (ContentID) references Content,
  foreign key (WorkshopID) references Workshops,
  primary key (WorkshopToContentID)
);

create table SponsorToDetails(
  SponsorToDetailID serial,
  ContentID int,
  ImageID int,
  foreign key (ContentID) references Content,
  foreign key (ImageID) references Images,
  primary key (SponsorToDetailID)
);