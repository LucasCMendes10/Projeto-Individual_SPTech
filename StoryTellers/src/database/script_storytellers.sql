create database StoryTellers;
use StoryTellers;

create table usuario (
idUsuario int primary key auto_increment,
nomeCompleto varchar(60),
dtNasc date,
nomeUsuario varchar(30),
senha varchar(45)
);

create table avaliacao (
idAvaliacao int primary key auto_increment,
qtdEstrela int,
dtAvaliacao date
);

create table jogo (
idJogo int primary key auto_increment,
nomeJogo varchar(45),
descricao varchar(255)
);

create table conquista (
idConquista int auto_increment,
fotoConquista varchar(255),
nomeConquista varchar(45),
descricaoConquista varchar(255),
fkJogo int,
constraint fkjogoconquista foreign key (fkJogo) references jogo(idJogo),
primary key (idConquista, fkJogo)
);

create table userJogo (
fkUsuario int,
constraint fkusuariouserjogo foreign key (fkUsuario) references usuario(idUsuario),
fkJogo int,
constraint fkjogouserjogo foreign key (fkJogo) references jogo(idJogo),
primary key (fkUsuario, fkJogo),
save varchar(20),
fkAvaliacao int,
constraint fkavaliacaouserjogo foreign key (fkAvaliacao) references avaliacao(idAvaliacao)
);

create table userConquista (
fkUsuario int,
constraint fkusuariouserconquista foreign key (fkUsuario) references usuario(idUsuario),
fkConquista int,
constraint fkconquistauserconquista foreign key (fkConquista) references conquista(idConquista),
fkJogo int,
constraint fkjogouserconquista foreign key (fkJogo) references jogo(idJogo),
dtConquista date
);