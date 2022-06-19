
import styles from "./CardNew.module.scss";

export const CardNew = ({title, changleTitle, description, changleDescription, buttonClick}) => {

   

    // const changleTitle = (e) => {
    //     setTitle(e.currentTarget.value);
    //     console.log(title);
    // }

    // const changleDescription = (e) => {
    //     setdescription(e.currentTarget.value);        
    //     console.log(description);
    // }



    // value={description} onChange={e => changleDescription(e)}




    return (
        <div className={styles.wrapper}>
            <h2 className={styles.font}>Add new one</h2>
            <input className={styles.input} placeholder={"TITLE"} value={title} onChange={e => changleTitle(e) }/>
            <textarea className={`${styles.input} ${styles.input__long}`} placeholder={"DESCRIPTION"} value={description} onChange={e => changleDescription(e)} />
            <input className={styles.input} placeholder={"TODAY"}/>
            <button className={styles.button} onClick={buttonClick}>ADD</button>     
        </div>
    )
}