﻿CREATE PROC FI_SP_IncBeneficiarioV2
    @NOME          VARCHAR (50) ,
	@CPF		   VARCHAR (14)
AS
BEGIN
	INSERT INTO BENEFICIARIOS (NOME, CPF) 
	VALUES (@NOME,@CPF)

	SELECT SCOPE_IDENTITY()
END