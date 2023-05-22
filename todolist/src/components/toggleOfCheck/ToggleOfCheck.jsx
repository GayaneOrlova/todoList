import React from "react";
import styles from "./ToggleOfCheck.module.css";

function ToggleOfCheck({onToogleCheck, isCheckedItem}) {
    return (
        <button
            title="Mark all as complete"
            className={`${styles.toogle__button} ${isCheckedItem ? styles.toggle__noopasity : styles.toggle__opasity}`}
            onClick={onToogleCheck}
        />
    )
}

export default ToggleOfCheck