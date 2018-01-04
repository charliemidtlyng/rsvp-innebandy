package no.charlie.rsvp.config

import org.hibernate.cfg.ImprovedNamingStrategy

/**
 * @author Charlie Midtlyng (charlie.midtlyng@BEKK.no)
 */
class InnebandyNamingStrategy extends ImprovedNamingStrategy {

    @Override
    String classToTableName(String className) {
        return "INNEBANDY_" + super.classToTableName(className)
    }

    @Override
    String tableName(String tableName) {
        return "INNEBANDY_" + super.tableName(tableName)
    }
}
