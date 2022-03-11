const Footer = {
    data() {
        return {
            phone: '+7 (495) 278-07-08',
            emailBuhgalter: 'buhgalter@myosminozhka.ru',
            emailMain: 'info@myosminozhka.ru',
            address: 'Москва, БЦ Серпуховской Двор 2-й Рощинский проезд, дом 8',
            legal: [
                'ИНН/КПП: 6317139806/631701001', 
                'Банк: АО "Тинькофф Банк"',
                'БИК: 044525974',
                'Р/С: 40702810010000559615',
                'К/С: 30101810145250000974',
            ]
        }
    }
}

Vue.createApp(Footer).mount('#footer');