import React, {useEffect, useState, Suspense} from 'react';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import {withErrorApi} from "../../hoc-helpers/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";

import UiLoading from "../../components/UI/UiLoading/UiLoading";

import {getApiResource} from "../../utils/network";
import {getPeopleImage} from "../../services/getPeopleData";
import {API_PERSON} from "../../constants/api";

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import("../../components/PersonPage/PersonFilms/PersonFilms"));

const PersonPage = ({match, setErrorApi}) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(null);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            let id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonId(id);

            if(res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Skin color', data: res.skin_color},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Birth year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms && (
                        <Suspense fallback={<UiLoading theme="white" />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}

                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object
}

export default withErrorApi(PersonPage);