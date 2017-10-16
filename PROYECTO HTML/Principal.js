
function Inicializacion()
{

	CargarBlog();
	CargarComboBusqueda(1);
	CargarComboBusqueda(2);

}


function CargarBlog(){

	var milista=document.getElementById("lista_blog_1");
	var milistapie=document.getElementById("lista_blog_pie");
	var titblog;
	var textnode;
	var entry ; 
	var miimg;
	var midivgen;
	var midivtxt;
	var stitulopost;
	var mianchor;
	var miparrafo;
	var misblogs=[];
	var misTitblogs=[];
	var misImgblogs=[];

	misblogs[0]="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique tortor et convallis rutrum. Donec dapibus, sapien nec tincidunt convallis, nunc ligula placerat sem, non volutpat erat tortor quis ligula. Pellentesque purus mi, tempor a scelerisque a, dapibus in lorem. Duis gravida faucibus est faucibus placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultricies convallis orci, sit amet consequat nibh interdum ut. Integer tristique, ipsum vitae consequat placerat, quam arcu interdum eros, nec venenatis tortor erat id libero. Sed sit amet erat metus. Maecenas ac luctus justo. Ut commodo molestie luctus. Aliquam a orci convallis, blandit turpis in, scelerisque neque. Aliquam ullamcorper, massa eu accumsan ultricies, nulla diam suscipit est, sed sodales nibh neque eu nisl. Phasellus at odio tellus...";
	misblogs[1]="Donec quis nulla erat. Quisque varius ornare porttitor. Suspendisse vitae ipsum dapibus, egestas nibh in, tincidunt lorem. Proin eu rhoncus dui. Aenean accumsan mattis tortor in eleifend. Nunc dapibus hendrerit dolor, id faucibus urna posuere quis. Pellentesque dui nulla, aliquam sed malesuada non, rhoncus a elit. Aliquam pharetra faucibus viverra. Nam faucibus ipsum diam, ac bibendum justo finibus ut. Duis malesuada lacus magna, in consequat velit scelerisque eu...";
	misblogs[2]="Quisque ultrices rutrum lectus non rhoncus. Integer purus lacus, luctus auctor mauris ut, congue molestie neque. Aliquam porttitor vestibulum fringilla. Sed et sem at tellus sodales feugiat et sit amet neque. Cras ex ipsum, fringilla sit amet est a, mattis tincidunt lorem. Praesent at odio imperdiet, pulvinar mi non, tempus ex. Nunc volutpat mattis quam vel tristique. Vivamus venenatis luctus lectus et pulvinar...";
	misblogs[3]="Cras in mauris nec nisl ullamcorper aliquam et id libero. Integer tempor sit amet arcu sit amet ultricies. Mauris eu mi lectus. Praesent vitae tellus gravida diam pulvinar tincidunt a rutrum tortor. Nunc pretium malesuada commodo. Sed luctus ligula sed turpis maximus, eget pulvinar augue congue. Quisque condimentum fringilla rhoncus. Nunc eget metus in risus scelerisque sollicitudin ut nec ligula. Morbi id ornare lacus. Proin ac diam a nisi sodales sollicitudin non sit amet ex. Morbi efficitur purus non nunc auctor elementum. Vestibulum nec pharetra metus...";
	misblogs[4]="Cras et sagittis enim, non fringilla nisl. Donec a lectus at leo convallis ultricies a commodo velit. Curabitur a dui id neque venenatis gravida. Suspendisse non aliquet lorem. Cras tristique odio sit amet vulputate efficitur. Vestibulum ut convallis enim. Nullam condimentum neque ac augue consectetur, imperdiet mollis purus porttitor. Nam aliquam velit id dolor auctor, sed dignissim dui cursus. Pellentesque condimentum nisl risus. Nam ornare pharetra massa, in fringilla quam dictum a...";
	misblogs[5]="Vestibulum quis metus euismod, ultricies libero a, molestie nibh. Pellentesque ac tristique elit, vel dapibus diam. Curabitur convallis tincidunt vestibulum. Vestibulum non dignissim enim. Pellentesque vestibulum quam non feugiat egestas. Aenean eget mi bibendum, sagittis ipsum quis, porta felis. Sed euismod libero quis congue congue. Aliquam erat volutpat. Pellentesque risus augue, convallis at odio non, auctor tincidunt sapien. Ut id consectetur erat. Donec ultricies orci ut purus lobortis, ut porta sem pharetra. Pellentesque nisi ex, finibus et mattis ut, iaculis sed nisl. Nulla quis eleifend erat. Integer et dui lacus. Sed ipsum leo, suscipit sit amet lacinia quis, iaculis non felis...";

	misTitblogs[0]="Lorem ipsum dolor sit amet";
	misTitblogs[1]="Donec quis nulla erat";
	misTitblogs[2]="Quisque ultrices rutrum lectus non rhoncus";
	misTitblogs[3]="Cras in mauris nec nisl ullamcorper aliquam et id libero";
	misTitblogs[4]="Cras et sagittis enim";
	misTitblogs[5]="Vestibulum quis metus euismod";

	misImgblogs[0]="blog_0.jpg";
	misImgblogs[1]="blog_1.jpg";
	misImgblogs[2]="blog_2.jpg";
	misImgblogs[3]="blog_3.jpg";
	misImgblogs[4]="blog_4.jpg";
	misImgblogs[5]="blog_5.jpg";

	for (i=0;i<6;i++)
	{
		stitulopost=misTitblogs[i];

		entry=document.createElement('li');	
		// Div que contiene ElTitulo
		midivitit=document.createElement('div');
		titblog=document.createTextNode(stitulopost);	
		midivitit.appendChild(titblog);
		midivitit.setAttribute("class", "itemtit");

		miimg=document.createElement("img");
		miimg.setAttribute('src', misImgblogs[i]);
		miimg.setAttribute('class', 'itemimg');
		miimg.setAttribute('height', '50px');
		miimg.setAttribute('width', '50px');

		// Div que contiene el texto
		midivitxt=document.createElement('div');

		miparrafo=document.createElement('p');
		textnode=document.createTextNode(misblogs[i]);
		miparrafo.appendChild(textnode);

		mianchor= document.createElement('a');
		mianchor.setAttribute('color', 'red');
		textnode=document.createTextNode('Ver mas');
		mianchor.appendChild(textnode);
		mianchor.title="Ver mas";
		mianchor.href = "#";


		miparrafo.appendChild(mianchor);
		midivitxt.appendChild(miparrafo);
		midivitxt.setAttribute("class", "itemtxt");

		entry.appendChild(midivitit);
		entry.appendChild(miimg);
		entry.appendChild(midivitxt);

		entry.setAttribute("class","itemblg");
		milista.appendChild(entry);

		// Lista de post en el pie de pagina
		entry=document.createElement('li');	
		mianchor= document.createElement('a');
		textnode=document.createTextNode(stitulopost);
		mianchor.appendChild(textnode);
		mianchor.title=stitulopost;
		mianchor.href = "#";
		entry.appendChild(mianchor);
		milistapie.appendChild(entry);
	}

}

function CargarComboBusqueda(nCombo){
	var itemseleccion;
	var miselectPA;
	var miselectAN;
	var miselectGE;

	switch (nCombo)
	{
		case 1:
		{

			miselectPA=document.frmconsul1.selepa;
			miselectAN=document.frmconsul1.selean;
			miselectGE=document.frmconsul1.selege;
			break;
		}
		case 2:
		{
			miselectPA=document.frmconsul2.selepa;
			miselectAN=document.frmconsul2.selean;
			miselectGE=document.frmconsul2.selege;
			break;

		}
		default:
			return;
	}

	// PAIS
	itemseleccion=document.createElement('option');	

	itemseleccion.value="0"
	itemseleccion.text="... Pais?"
	miselectPA.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="1"
	itemseleccion.text="Argentina"
	miselectPA.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="2"
	itemseleccion.text="Francia"
	miselectPA.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="3"
	itemseleccion.text="Euskadi"
	miselectPA.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="4"
	itemseleccion.text="USA"
	miselectPA.appendChild(itemseleccion);

	// DECADA
	itemseleccion=document.createElement('option');	

	itemseleccion.value="0"
	itemseleccion.text="... Decada?"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="1"
	itemseleccion.text="1920-1929"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="2"
	itemseleccion.text="1930-1939"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="3"
	itemseleccion.text="1940-1949"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="4"
	itemseleccion.text="1950-1959"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="5"
	itemseleccion.text="1960-1969"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="6"
	itemseleccion.text="1970-1979"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="7"
	itemseleccion.text="1980-1989"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="8"
	itemseleccion.text="1990-1999"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="9"
	itemseleccion.text="2000-2009"
	miselectAN.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="10"
	itemseleccion.text="2010-2019"
	miselectAN.appendChild(itemseleccion);

	// GENERO
	itemseleccion=document.createElement('option');	

	itemseleccion.value="0"
	itemseleccion.text="... Genero?"
	miselectGE.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="1"
	itemseleccion.text="Epicas"
	miselectGE.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="2"
	itemseleccion.text="Gansters"
	miselectGE.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="3"
	itemseleccion.text="Horror"
	miselectGE.appendChild(itemseleccion);

	itemseleccion=document.createElement('option');	
	itemseleccion.value="4"
	itemseleccion.text="Romanticas"
	miselectGE.appendChild(itemseleccion);

}

