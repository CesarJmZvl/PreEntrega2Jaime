const productos = [
    //Amplificadores
    {
        id: 1,
        title: "McIntosh MA9000 2-Channel Integrated Amplifier",
        description: "300 Watts x 2 channel. 8-band tone control. Comes with DA1 Digital Audio Module installed. Optional dealer installed upgrade to DA2 Digital Audio Module available",
        stock: 1,
        type: "Amplificador",
        imageProduct: {
            firstImage: "https://www.mcintoshlabs.com/cdn-cgi/image/quality=90/-/media/images/mcintoshlabs/products/productimages/ma9000/ma9000-angle-left-high-background.jpg?rev=5a4ca782d8814e5d863a188c89b21f81&revision=5a4ca782-d881-4e5d-863a-188c89b21f81",
        },
        price: 120000,
    },

    {
        id: 2,
        title: "McIntosh MA352 2-Channel Hybrid Integrated Amplifier",
        description: "Includes our Hybrid Drive™ technology that uses the best of vacuum tubes and solid state to produce the best sound performance. Vacuum tube preamplifier and solid state power amplifier. 200 Watts into 8 Ohms. 320 Watts into 4 Ohms. 5-band tone control",
        stock: 3,
        type: "Amplificador",
        imageProduct: {
            firstImage: "https://www.mcintoshlabs.com/cdn-cgi/image/quality=90/-/media/images/mcintoshlabs/products/productimages/ma352/ma352-angle-right-remote-background.jpg?rev=a8c151bc254b4972ad5c18fb4cd93ed8&revision=a8c151bc-254b-4972-ad5c-18fb4cd93ed8",
        },
        price: 85000,
    },

    {
        id: 3,
        title: "McIntosh MA252 2-Channel Hybrid Integrated Amplifier",
        description: "Includes our Hybrid Drive™ technology that uses the best of vacuum tubes and solid state to produce the best sound performance. Vacuum tube preamplifier and solid state power amplifier. 100 Watts into 8 Ohms. 160 Watts into 4 Ohms",
        stock: 5,
        type: "Amplificador",
        imageProduct: {
            firstImage: "https://www.mcintoshlabs.com/cdn-cgi/image/quality=90/-/media/images/mcintoshlabs/products/productimages/ma252/ma252-table.jpg?rev=1b16719f3989440f9428647beeec5a31&revision=1b16719f-3989-440f-9428-647beeec5a31",
        },
        price: 50000,
    },

    //Bocinas
    {
        id: 4,
        title: "Klipsch R-50M",
        description: "An updated horn design, including increased outer horn dimensions, will deliver more power and emotion to your music and movies. Bigger definitely means better, with directivity control over a larger bandwidth of frequencies, resulting in a more accurate sound stage.",
        stock: 6,
        type: "Bocinas",
        imageProduct: {
            firstImage: "https://klipsch.imgix.net/product-images/R-50M-Carousel-1.png?auto=compress%2Cformat&fillTransforms=1&fit=clip&q=80&w=2000",
        },
        price: 25000,      
    },

    {
        id: 5,
        title: "Klipsch R-800F",
        description: "An updated horn design, including increased outer horn dimensions, will deliver more power and emotion to your music and movies. Bigger definitely means better, with directivity control over a larger bandwidth of frequencies, resulting in a more accurate sound stage.",
        stock: 6,
        type: "Bocinas",
        imageProduct: {
            firstImage: "https://klipsch.imgix.net/product-images/R-800F-Hero-Grilles-Off.png?auto=compress%2Cformat&fillTransforms=1&fit=clip&q=80&w=2000",
        },
        price: 34000,      
    },

    //Tornamesas
    {
        id: 6,
        title: "Audio-Technica AT-LP2022",
        description: "The limited-edition AT-LP2022 turntable celebrates 60 years of audio excellence, designed with modern aesthetics and a uniqueness like no other. This fully manual turntable with belt drive operation demonstrates the purity of analog audio. With a limited-edition Shibata stylus and carbon-fiber tonearm, the AT-LP2022 heightens everyday listening experiences and effortlessly unites people through sound.",
        stock: 1,
        type: "Tornamesas",
        imageProduct: {
            firstImage: "https://www.audio-technica.com/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at-lp2022_01.png",
        },
        price: 25000,      
    },

    {
        id: 7,
        title: "Audio-Technica AT-LP7",
        description: "Audio-Technica began in 1962 as a designer and manufacturer of high-end phonograph cartridges, bringing to the audio world the innovative Dual Moving Magnet stereo cartridge with its outstanding channel separation, extended frequency response and superb tracking. The AT-LP7 builds on this heritage.",
        stock: 5,
        type: "Tornamesas",
        imageProduct: {
            firstImage: "https://www.audio-technica.com/media/catalog/product/cache/8dd197211b5cade13ef7fc9815610330/a/t/at-lp7_01.png"
        },
        price: 16000,      
    },

    //Exualizadores
    {
        id: 8,
        title: "LOKIUS",
        description: "Yes, tone control. As in, equalizer. Just like a Loki Mini+, but with 2 more bands and balanced inputs and outputs. And yeah, we know you can get a surgical software EQ, but the 6 knobs here just sit on your desk and beckon. No apps, no graphic confusion with mice or styli. Just tweak the sound to your exact preference, with a super-high-performance, discrete, single-gain-stage, LC-filtered equalizer at your fingertips.",
        stock: 5,
        type: "Ecualizadores",
        imageProduct: {
            firstImage: "https://www.schiit.com/public/upload/images/lokius%20black%20front%201920.jpg",
        },
        price: 6000,      
    },

    {
        id: 9,
        title: "LOKI MAX",
        description: "Yes, remote control. As in, you can adjust the frequency response of your system from your listening chair—and save presets. And this thing is as crazy as you can get—relay potentiometers for precision matching between channels and repeatable settings. All discrete, with no ICs in the signal path, including our own Nexus™ balanced differential topology. And pure LC—inductor-capacitor filtering from the highest to the lowest band, including 4 custom 80% nickel-core inductors as big as 1.5 Henries.",
        stock: 2,
        type: "Ecualizadores",
        imageProduct: {
            firstImage: "https://www.schiit.com/public/upload/images/loki%20max%20front%201920.jpg",
        },
        price: 30000,      
    },

    {
        id: 10,
        title: "LOKI MINI+",
        description:"Yes, tone control. As in, equalizer. And yeah, we know that tone controls have kinda fallen off the planet for the last few decades. But we decided to bring them back with the original Loki Mini. And now, with the Loki Mini+, we’ve boosted the performance—pushing the boundaries super-high-fidelity, low noise, single-discrete-gain-stage, LC-filtered, affordable equalizers even further.",
        stock: 7,
        type: "Ecualizadores",
        imageProduct: {
            firstImage: "https://www.schiit.com/public/upload/images/loki-mini-plus-blk-front-1920.jpg",
        },
        price: 3000,      
    },
]

export default productos;