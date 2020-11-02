const Conta = require('../model/conta');

module.exports = {

    get: (req, res) => {
        res.render('incluir_conta')
    },
    post: (req, res) => {
        
        try {
            
            let {
                nome,
                valor,
                datavenc,
                datapag

            } = req.body;

            if(datavenc < datapag){
                
                let data1 = new Date(datavenc);
                let data2 = new Date(datapag);
                let qtdDiasEmAtraso = Math.ceil(Math.abs(data2 - data1) / (1000 * 60 * 60 * 24));
                let regra = 0;
                valor = parseFloat(valor);

                //regra1
                if(qtdDiasEmAtraso > 0 && qtdDiasEmAtraso <= 3){
                    regra = 1;
                    valorCorrigido = valor + (2 *(valor / 100));
                    for(let x = 1; x <= qtdDiasEmAtraso; x++){
                        valorCorrigido = valorCorrigido + ((valorCorrigido / 100) * 0.1)
                    }
                //regra2
                } else if(qtdDiasEmAtraso > 3 && qtdDiasEmAtraso <= 5){
                    regra = 2;
                    valorCorrigido = valor + (3 *(valor / 100));
                    for(let x = 1; x <= qtdDiasEmAtraso; x++){
                        valorCorrigido = valorCorrigido + ((valorCorrigido / 100) * 0.2)
                    } 
                //regra3
                } else if(qtdDiasEmAtraso > 5){
                    regra = 3;
                    valorCorrigido = valor + (5 *(valor / 100));
                    for(let x = 1; x <= qtdDiasEmAtraso; x++){
                        valorCorrigido = valorCorrigido + ((valorCorrigido / 100) * 0.3)
                    }
                }

            valorCorrigido = parseFloat(valorCorrigido).toFixed(2)
            Conta.create({
                nome,
                valor,
                datavenc,
                datapag,
                valorCorrigido,
                qtdDiasEmAtraso,
                regra

            })
            .then(() => res.status(200).send('Conta cadastrada com sucesso.'))
            .catch(err => res.status(500).send('Não foi possível cadastrar no banco de dados.' + err))

            }else{

                Conta.create({
                    nome,
                    valor,
                    datavenc,
                    datapag
                })
                .then(() => res.status(200).send('Conta cadastrada com sucesso.'))
                .catch(err => res.status(500).send('Não foi possível cadastrar no banco de dados.' + err))
            }
        
        } catch(error){
            return res.status(500).send("Erro interno no servidor => " + error);
        }
    }
}