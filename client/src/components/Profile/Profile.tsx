import React, {useEffect} from "react"
import './Profile.css';
import {connect} from "react-redux";
import {fetchProfile} from "../../store/action-creators/profile";
import {useParams} from "react-router-dom";

function Profile(props: any) {
    console.log(props)
    let {id} = useParams();

    useEffect(() => {
        props.fetchProfile(id)
    }, [])

    if (props.loading) {
        return (
            <div className="page">
                <h1>Идет загрузка...</h1>
            </div>
        )
    }

    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className="page">
            {props.profile ? props.profile.name : ''}
        </div>
    )
}
let mapStateToProps = (state: any) => {
    return {
        profile: state.profile.profile,
        loading: state.profile.loading,
        error: state.profile.error
    }
}

let ProfileContainer = connect(mapStateToProps, {
    fetchProfile,
})(Profile);

export default ProfileContainer;