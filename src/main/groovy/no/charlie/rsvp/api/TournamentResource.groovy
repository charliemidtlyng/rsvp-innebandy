package no.charlie.rsvp.api

import no.charlie.rsvp.service.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

import javax.ws.rs.*
import javax.ws.rs.core.*

/**
 * @author Charlie Midtlyng (charlie.midtlyng@BEKK.no)
 */
@Component
@Produces(MediaType.APPLICATION_JSON)
@Path("/tournament")
class TournamentResource {

    @Autowired TournamentService tournamentService

    @GET
    Response getTournaments() {

        List<Map> tournamentQueries = [
                [
                        season: 'Inne 2017/2018',
                        tournamentId: 378271L
                ],
                [
                        season: 'Ute 2017',
                        tournamentId: 373316L
                ],
                [
                        season: 'Inne 2016/2017',
                        tournamentId: 371313L
                ],
                [
                        season: 'Inne 2016/2017',
                        tournamentId: 371328L
                ]
        ]

        def tournaments = tournamentQueries.collect {
            tournamentService.getTournament(it.tournamentId, it.season)
        }

        return Response.ok().entity(tournaments).build()
    }

}
