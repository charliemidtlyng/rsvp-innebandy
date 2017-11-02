package no.charlie.rsvp.service

import groovyx.net.http.HTTPBuilder
import no.charlie.rsvp.domain.TournamentRow
import no.charlie.rsvp.domain.Tournament
import org.springframework.stereotype.Service

/**
 * @author Charlie Midtlyng (charlie.midtlyng@BEKK.no)
 */
@Service
class TournamentServiceImpl implements TournamentService {


    @Override
    Tournament getTournament(Long tournamentId, String season) {
        String baseUrl = 'https://wp.nif.no'
        def url = "${baseUrl}/PageTournamentDetails.aspx?tournamentId=${tournamentId}"
        def http = new HTTPBuilder(url)
        def html = http.get([:])

        List<TournamentRow> tournamentRows = html."**".findAll { it.name().contains("TR") }
                .findAll { !(it.toString().startsWith('Organisasjonsnavn') || it.toString().startsWith('Siste') || it.toString().equals('') || it.toString().startsWith('\n'))  }
                .collect { tr ->
            new TournamentRow(
                    name: tr.TD[0].text().trim(),
                    gamesPlayed: tr.TD[1].text().trim(),
                    won: tr.TD[2].text().trim(),
                    even: tr.TD[3].text().trim(),
                    lost: tr.TD[4].text().trim(),
                    goals: tr.TD[5].text().trim(),
                    points: tr.TD[6].text().trim(),
                    walkOver: tr.TD[7].text().trim()
            )

        }

        new Tournament(season:  season, tournamentRows: tournamentRows, id: tournamentId)
    }



}
