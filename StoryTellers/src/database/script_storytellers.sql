create database StoryTellers;
use StoryTellers;

create table usuario (
idUsuario int primary key auto_increment,
nomeCompleto varchar(60) not null,
dtNasc date not null,
nomeUsuario varchar(30) not null unique,
senha varchar(45) not null
);

desc usuario;
select * from usuario;

create table jogo (
idJogo int primary key auto_increment,
nomeJogo varchar(45) not null,
descricao text not null
);

insert into jogo (nomeJogo, descricao) values
	('O Viajante', '"O Viajante" é um jogo curto de história interativa, ou seja, você escolhe os rumos que ela vai tomar. A sinopse da história é: um jovem chamado Leonardo vivia sua vida normalmente, sendo um estudante de 18 anos, no início do ensino superior, até que um dia, enquanto voltava para casa, um portal surge em sua frente, com um homem suplicando por sua ajuda! Você irá decidir quais as ações que o protagonista terá perante as situações inesperadas que irão acontecer, como por exemplo, aceitar ou não o pedido do homem misterioso. Mas lembre-se, cada escolha sua irá mudar para sempre a vida de Leonardo...');

select * from jogo;

create table avaliacao (
idAvaliacao int auto_increment,
fkJogo int,
constraint fkjogoavaliacao foreign key (fkJogo) references jogo(idJogo),
fkUsuario int,
constraint fkusuarioavaliacao foreign key (fkUsuario) references usuario(idUsuario),
primary key (idAvaliacao, fkJogo, fkUsuario),
qtdEstrela int,
dtAvaliacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

desc avaliacao;
select * from avaliacao;
drop table avaliacao;

create table conquista (
idConquista int auto_increment,
fotoConquista varchar(255) not null,
nomeConquista varchar(45) not null,
descricaoConquista varchar(255) not null,
fkJogo int,
constraint fkjogoconquista foreign key (fkJogo) references jogo(idJogo),
primary key (idConquista, fkJogo)
);

insert into conquista (fotoConquista, nomeConquista, descricaoConquista, fkJogo) values
	('../assets/Imagens-Jogos/trofeu_bronze.png', 'Um Homem Comum', 'Você pegou o Final Mundano', 1),
    ('../assets/Imagens-Jogos/trofeu_prata.png', 'Um Homem Condenado', 'Você pegou o Final Confinado', 1),
    ('../assets/Imagens-Jogos/trofeu_ouro.png', 'Um Homem Livre', 'Você pegou o Final Épico', 1);
    
select * from conquista;

create table userJogo (
id int auto_increment,
fkUsuario int,
constraint fkusuariouserjogo foreign key (fkUsuario) references usuario(idUsuario),
fkJogo int,
constraint fkjogouserjogo foreign key (fkJogo) references jogo(idJogo),
primary key (id, fkUsuario, fkJogo),
save int,
saveBackground varchar(50),	
fkConquista int,
constraint fkconquistauser foreign key (fkConquista) references conquista(idConquista),
dtProgresso TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

alter table userJogo drop constraint fkavaliacaouserjogo;
alter table userJogo drop column fkAvaliacao;

select * from usuario;
select * from userJogo;
truncate table userJogo;
select save from userJogo where fkUsuario = 2 and fkJogo = 1 order by dtProgresso desc limit 1;
select count(fkUsuario) from userJogo where fkUsuario = 5 and fkJogo = 1;
select count(distinct fkConquista) from userJogo where fkUsuario = 5 and fkJogo = 1 and fkConquista is not null;
select * from userJogo where fkUsuario = 5 and fkJogo = 1 and fkConquista = 1;
update userJogo set save = 10 where fkUsuario = 1 and fkJogo = 1 and id = 10;
update userJogo set saveBackground = 'teste5' where fkUsuario = 1 and fkJogo = 1 and id = 10;

select id from userJogo where fkUsuario = 2 and fkJogo = 1 order by dtProgresso desc limit 1;

select qtdEstrela, count(qtdEstrela) as qtdAvaliacao from avaliacao group by qtdEstrela order by qtdEstrela;

select count(fkConquista) as qtdConquista1,
	   (select count(fkConquista) from userJogo where fkConquista = 2 and fkJogo = 1) as qtdConquista2,
       (select count(fkConquista) from userJogo where fkConquista = 3 and fkJogo = 1) as qtdConquista3
from userJogo
where fkConquista = 1 and fkJogo = 1;