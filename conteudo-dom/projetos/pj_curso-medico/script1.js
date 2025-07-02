import { localDaDor } from "./localDor.js";
import { sintomas } from "./sintomas.js";

const localDor = document.getElementById("local-dor");
const intensidadeDor = document.getElementById("intensidade-dor");
const caracteristicasInicio = document.getElementById("caracteristicas-inicio");
const dorReferida = document.getElementById("dor-referida");
const tipoDor = document.getElementById("tipo-dor");
const duracaoDor = document.getElementById("duracao-dor");
const ritmoIntestinal = document.getElementById("ritmo-intestinal");

const outrosSintomas = document.getElementById("outros-sintomas");
const resultadoSintomas = document.getElementById("resultado-sintomas");
const divSalvos = document.getElementById("sintomas-salvos");

//Guardar resultados

let resultado = [];
let doencas = [];

let sintomasSalvos = [];

//Eventos
localDor.addEventListener("input", function (event) {
  const local = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    const filtro = localDaDor.filter((element) => element.localDaDor === local);
    console.log(filtro);
  } else {
    return null;
  }
});

caracteristicasInicio.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const caracteristicas = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    console.log("Entrou");
    const filtro = localDaDor.filter(
      (element) => element.localDaDor === caracteristicas
    );
    console.log("alo", filtro);
  } else {
    resultado = resultado.filter((item) => item != caracteristicas);
  }
});

intensidadeDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const intensidade = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(intensidade);
    if (intensidade === "fraca") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Febre tifoide");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Ileite actínica");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pericardite");
      doencas.push("Pielonefrite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
    } else if (intensidade === "media") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Colite isquêmica");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Intolerância a lactose");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (intensidade === "forte") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite isquêmica");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != intensidade);
  }
});

dorReferida.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const referida = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(referida);
    if (referida === "dorso") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pielonefrite");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Tabes dorsalis");
    } else if (referida === "ombro_direito") {
      doencas.push("Abscesso hepático");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Úlcera péptica perfurada");
    } else if (referida === "ombro_esquerdo") {
      doencas.push("Abscesso esplênico");
      doencas.push("Crise falcêmica");
      doencas.push("Infarto esplênico");
      doencas.push("Ruptura de baço");
    } else if (referida === "regiao_inguinal") {
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Ruptura de aneurisma da aorta");
    } else if (referida === "sem_dor") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite actínica");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Obstrução intestinal");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != referida);
  }
});

tipoDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const tipo = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(tipo);
    if (tipo === "aperto") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Constipação");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Gastrite");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia estrangulada");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção urinária");
      doencas.push("Pericardite");
      doencas.push("Pielonefrite");
      doencas.push("Úlcera gástrica");
    } else if (tipo === "colica") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (tipo === "constante") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Vasculite associada a IgA");
    } else if (tipo === "fisgada") {
      doencas.push("Apendicite");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Gastrite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Herpes Zoster");
      doencas.push("Infarto esplênico");
      doencas.push("Intolerância a lactose");
      doencas.push("Prenhez ectópica");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (tipo === "superficial") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Hematoma do músculo reto");
    }
  } else {
    resultado = resultado.filter((item) => item != tipo);
  }
});

duracaoDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const duracao = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(duracao);
    if (duracao === "aguda") {
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (duracao === "cronica") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Febre tifoide");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Ileite actínica");
      doencas.push("Ileite por AINE");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Prenhez ectópica");
      doencas.push("Salpingite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != duracao);
  }
});

ritmoIntestinal.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const ritmo = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(ritmo);
    if (ritmo === "alteracao_recente") {
      doencas.push("Colecistite");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Hiperlipidemia");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Retocolite ulcerativa");
    } else if (ritmo === "constipacao") {
      doencas.push("Apendicite");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Endometriose");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Porfiria aguda");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vólvulo");
    } else if (ritmo === "diarreia") {
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Colite Isquêmica");
      doencas.push("Doença celíaca");
      doencas.push("Endometriose");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infecção respiratória");
      doencas.push("Intolerância a lactose");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Tuberculose intestinal");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (ritmo === "diarreia_muco_sanguinolenta") {
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Verminoses");
    } else if (ritmo === "diarreia_sanguinolenta") {
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Isquemia mesentérica");
      doencas.push("Yersiniose");
    } else if (ritmo === "sem_alteracao") {
      doencas.push("Abscesso hepático");
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Gastrite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia diafragmática");
      doencas.push("Herpes Zoster");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Mucocele do apêndice");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
    }
  } else {
    resultado = resultado.filter((item) => item != ritmo);
  }
});

outrosSintomas.addEventListener("input", function ({ target }) {
  sintomas.forEach((element, index) => {
    const { value } = target;

    if (value === "") return (resultadoSintomas.innerHTML = "");

    const filtrar = sintomas.filter((element) =>
      element.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    resultadoSintomas.innerHTML = "";
    filtrar.forEach((e) => {
      resultadoSintomas.innerHTML += `
        <input 
          type="checkbox" 
          class="btn-check sintomas-check" 
          id="${e}" 
          name="${e}" 
          value="${e}" 
          autocomplete="off"
        >
        <label class="btn btn-outline-danger" for="${e}">${e}</label><br>
      `;
    });
    document.querySelectorAll(".sintomas-check").forEach((e) => {
      e.addEventListener("click", function () {
        console.log(e);
        if (sintomasSalvos.includes(e.value)) {
          sintomasSalvos = sintomasSalvos.filter(
            (element) => element !== e.value
          );
        } else {
          sintomasSalvos.push(e.value);
        }
        divSalvos.innerHTML = "";

        sintomasSalvos.forEach((el) => {
          divSalvos.innerHTML += `
          <input 
            type="checkbox" 
            class="btn-check sintomas-check checked" 
            id="${el}" 
            name="${el}" 
            value="${el}" 
            autocomplete="off"
          >
          <label class="btn btn-outline-danger" for="${el}">${el}</label>
          
          `;
        });
      });
    });
  });
});
