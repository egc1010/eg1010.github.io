var inicioApp = function()
{
	

	var Inicio = function()
	{
		$("section > article").hide();
		$("#artInicio").show();
		$("#artInicioTxt").show();
		$("#MenuResp").val("btnInicio");

	}

	var Quien = function()
	{
		$("section > article").hide();
		$("#Curriculum").show();
		$("#curriculumTxt").show();
		$("#MenuResp").val("btncurriculum");
	}

	var Primer = function()
	{
		$("section > article").hide();
		
		$("#MenuResp").val("btnPrimer");

	}
	var Html = function()
	{
		$("#curr").hide();
		$("section > article").hide();
		$("#artPrimer").show();
		$("#artPrimerTxt").show();
		$("#artIndice").show();
		$("#artIndiceTxt").show();

		$("#pag1").show();
		$("#pag1Txt").show();
		$("#artCss").show();
		$("#artCssTxt").show();
		$("#artCss2").show();
		$("#artCss2Txt").show();
		$("#artCss3").show();
		$("#artCss3Txt").show();

		$("#MenuResp").val("btnHtml");

	}

	var Bootstrap = function()
	{
		$("section > article").hide();
		$("#artBootstrap").show();
		$("#artBootstrapTxt").show();
		$("#MenuResp").val("btnBootstrap");

	}

	var Java = function()
	{
		$("#curr").hide();
		$("section > article").hide();
		$("#artJava").show();
		$("#artJavaTxt").show();
		$("#artBootstrap").show();
		$("#artBootstrapTxt").show();
		$("#artPhp").show();
		$("#artPhpTxt").show();
		$("#MenuResp").val("btnJava");

	}
	var Php = function()
	{
		$("section > article").hide();
		$("#artPhp").show();
		$("#artPhpTxt").show();
		$("#MenuResp").val("btnPhp");

	}

	//Eventos del usuario.
	$("#btnInicio").on("click",Inicio);
	$("#btncurriculum").on("click",Quien);
	$("#btnPrimer").on("click",Primer);
	$("#btnHtml").on("click",Html);
	$("#btnBootstrap").on("click",Bootstrap);
	$("#btnJava").on("click",Java);
	$("#btnPhp").on("click",Php);

	var id = $("#MenuResp").val();
	if(id=="btnInicio")
		Inicio();
	else if(id=="btncurriculum")
		Quien();
	else if(id=="btnPrimer")
		Primer();
	else if(id=="btnHtml")
		Html();
	else if(id=="btnBootstrap")
		Bootstrap();
	else if(id=="btnJava")
		Java();
	else if(id=="btnPhp")
		Php();


}

$(document).on("ready",inicioApp);