exports.config = {
    project:{
        title         : 'Botões Renato Alexandre',
        description   : 'As melhores frases de Renato Alexandre!',
        url           : 'http://renato.botoes.co',
        external_link : 'http://www.facebook.com/brunoaleixo',
        facebook: {
            id: "1016048086"
        },
        google: {
            id: 'UA-65109630-1'
        }
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos, joão ferreira <i class="fa fa-envelope"></i></a> , baseado em <a href="http://www.facebook.com/brunoaleixo">bruno aleixo <i class="fa fa-external-link"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity',
    toplinks: [
        {
            link: 'http://aleixo.botoes.co',
            title: 'Aleixo'
        },{
            link: 'http://bussaco.botoes.co',
            title: 'Bussaco'
        },{
            link: 'http://senhorpe.botoes.co',
            title: 'Senhor Pé'
        },{
            link: 'http://beatriz.botoes.co',
            title: 'Beatriz'
        }
    ],
    server: {
        port: 10115
    }
};
