create database StoryTellers;
use StoryTellers;

create table usuario (
idUsuario int primary key auto_increment,
nomeCompleto varchar(60) not null,
dtNasc date not null,
nomeUsuario varchar(30) not null,
senha varchar(45) not null
);

select * from usuario;

create table avaliacao (
idAvaliacao int primary key auto_increment,
qtdEstrela int,
dtAvaliacao date
);

create table jogo (
idJogo int primary key auto_increment,
nomeJogo varchar(45) not null,
descricao varchar(255) not null
);

create table conquista (
idConquista int auto_increment,
fotoConquista varchar(255) not null,
nomeConquista varchar(45) not null,
descricaoConquista varchar(255) not null,
fkJogo int,
constraint fkjogoconquista foreign key (fkJogo) references jogo(idJogo),
primary key (idConquista, fkJogo)
);

create table userJogo (
id int auto_increment,
fkUsuario int,
constraint fkusuariouserjogo foreign key (fkUsuario) references usuario(idUsuario),
fkJogo int,
constraint fkjogouserjogo foreign key (fkJogo) references jogo(idJogo),
primary key (id, fkUsuario, fkJogo),
save varchar(20),
fkAvaliacao int,
constraint fkavaliacaouserjogo foreign key (fkAvaliacao) references avaliacao(idAvaliacao),
fkConquitsa int,
constraint fkconquistauser foreign key (fkConquitsa) references conquista(idConquista),
dtProgresso datetime
);