

function nextTuesday(hour, minute) {
    var isTuesday = Date.today().is().tuesday();
    var tuesday = isTuesday ? Date.today() : Date.today().next().tuesday();
    tuesday.set({hour: hour, minute: minute, second: 0});
    return tuesday;
}

function nextFriday(hour, minute) {
    var isFriday = Date.today().is().friday();
    var friday = isFriday ? Date.today() : Date.today().next().friday();
    friday.set({hour: hour, minute: minute, second: 0});
    return friday;
}

var DefaultEvents = {
    training: function () {
        return {
            subject: 'Trening i Anker Gym',
            description: 'Oppmøte 17:45!\nInnebandytrening i Anker Gym. \nHvis det viser seg at du allikevel ikke \nkan komme, meld deg av så snart \ndu vet dette - og si ifra til nestemann \npå lista (evt. Socialcast). \n\nLegger du ved epost/mobilnr får du \nmail/sms så snart du forflytter deg \nfra reservelista til påmeldtlista!',
            location: 'Anker Gym',
            maxNumber: 10,
            startTime: nextTuesday(20, 0),
            endTime: nextTuesday(21, 0),
            regStart: nextFriday(8, 30),
            regEnd: nextTuesday(21, 0),
            eventSubType: 'Training',
            creator: 'HB'
        };
    }

};
module.exports = DefaultEvents;