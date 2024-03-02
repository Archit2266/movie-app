import React from "react"
import styles from "./banner.module.css"

export function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.header1}>
                GET  MOVIE
                TICKETS
            </h1>
            <p>Buy movie tickets in advance,find movie times watch trailers,</p>
            <p>read movie reviews and much more</p>

        </div>
    )
}