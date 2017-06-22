import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã/RJ",
		data: "01/06/2016",
		horario: "19h",
	},
	casa: {
		nome: "Vasco",
	},
	visitante:{
		nome: "Flamengo",
	}
};

export default class App extends React.Component {
	render( ) {
		return <PlacarContainer {...dados} />;
			
	}
}
//Linha 22 trocamos esse codigo abaixo por {...dados}
//return <PlacarContainer partida={dados.partida}
					    //casa={dados.casa}
						//visitante={dados.visitante} />;
