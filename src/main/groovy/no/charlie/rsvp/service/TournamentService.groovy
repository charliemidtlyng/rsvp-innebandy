package no.charlie.rsvp.service

import no.charlie.rsvp.domain.Tournament

/**
 * @author Charlie Midtlyng (charlie.midtlyng@BEKK.no)
 */
interface TournamentService {

    Tournament getTournament(Long tournamentId, String season)
}