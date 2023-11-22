create database StoryTellers;
use StoryTellers;

create table usuario (
idUsuario int primary key auto_increment,
nomeCompleto varchar(60) not null,
dtNasc date not null,
nomeUsuario varchar(30) not null unique,
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
descricao text not null
);

insert into jogo (nomeJogo, descricao) values
	('O Viajante', '"O Viajante" é um jogo curto de história interativa, ou seja, você escolhe os rumos que ela vai tomar. A sinopse da história é: um jovem chamado Leonardo vivia sua vida normalmente, sendo um estudante de 18 anos, no início do ensino superior, até que um dia, enquanto voltava para casa, um portal surge em sua frente, com um homem suplicando por sua ajuda! Você irá decidir quais as ações que o protagonista terá perante as situações inesperadas que irão acontecer, como por exemplo, aceitar ou não o pedido do homem misterioso. Mas lembre-se, cada escolha sua irá mudar para sempre a vida de Leonardo...');

select * from jogo;

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
fkAvaliacao int,
constraint fkavaliacaouserjogo foreign key (fkAvaliacao) references avaliacao(idAvaliacao),
fkConquista int,
constraint fkconquistauser foreign key (fkConquista) references conquista(idConquista),
dtProgresso TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

insert into userJogo (fkUsuario, fkJogo, save, fkConquista) values
    (1, 1, null, null),
    (2, 1, 'telas[5]', null);

select * from userJogo;
update userJogo set save = 'tela[5]' where fkUsuario = 5 and fkJogo = 1 and id = 2;
select save from userJogo where fkUsuario = 5 and fkJogo = 1 order by dtProgresso desc limit 1;
select count(distinct fkConquista) from userJogo where fkUsuario = 1 and fkJogo = 1 and fkConquista is not null;

truncate table userJogo;
drop table userJogo;