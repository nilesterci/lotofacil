CREATE TABLE Sorteio (
    ID int IDENTITY(1,1) PRIMARY KEY,
    Sorteio int,
    Numeros varchar(255),
    DataSorteio datetime,
    DataProxSorteio datetime,
    CriadoEm datetime default CURRENT_TIMESTAMP
);

ALTER PROCEDURE [dbo].[AtualizaBanco] 
    @intNumero int,
    @strListaDezenas nvarchar(max),
    @dteDataApuracao DateTime,
    @dteDataProximoConcurso DateTime
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
   
   INSERT INTO db.dbo.Sorteio
(Sorteio, Numeros, DataSorteio, DataProxSorteio)
VALUES(@intNumero, @strListaDezenas, @dteDataApuracao, @dteDataProximoConcurso);


END

ALTER PROCEDURE [dbo].[RetornaUltimoSorteio] 
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
   
SELECT TOP 1 Sorteio as ultimosorteioregistrado
FROM db.dbo.Sorteio ORDER BY Sorteio DESC;


END