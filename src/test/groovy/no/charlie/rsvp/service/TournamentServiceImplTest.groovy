package no.charlie.rsvp.service

import spock.lang.Specification

/**
 * @author Charlie Midtlyng (charlie.midtlyng@BEKK.no)
 */
class TournamentServiceImplTest extends Specification {

    def tournamentService = new TournamentServiceImpl()

    def "should map tournamentHtmlToObject"() {
        when:
            def tournament = tournamentService.getTournament(373316L, "2017 ute")
        then:
            tournament.tournamentRows.size() == 13
    }

}
