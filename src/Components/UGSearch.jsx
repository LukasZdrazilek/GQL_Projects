/* eslint-disable react/prop-types */
import { CardCapsule, TextInput, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useState } from "react"
import { FetchSearchAsyncAction } from "../Queries/FetchSearchAsyncAction"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { UserLink } from "./User/UserLink"
import { GroupLink } from "./Group"
import { ProjectLink } from "./Project/ProjectLink"

const ShowUser = ({user}) => {
    return (
        <>
            <UserLink user={user} />
            <br />
        </>
    )
}

const ShowGroup = ({group}) => {
    return (
        <>
            <GroupLink group={group} />
            <br />
        </>
    )
}

const ShowProject = ({project}) => {
    return (
        <>
            <ProjectLink project={project} />
            <br />
        </>
    )
}

const Nevim = ({item}) => {
    return (
        <>
            Nalezl jsem toto : {JSON.stringify(item)}
        </>
    )
}

const LinkMap = {
    GroupGQLModel: ({item}) => <GroupLink group={item} />,
    UserGQLModel: ({item}) => <UserLink user={item} />,
    ProjectGQLModel: ({item}) => <ProjectLink project={item} />,

}

const ShowResult = ({item}) => {
    const Component = LinkMap[item?.__typename] || Nevim
    return (
        <>  
            <Component item={item} />
            <br />
        </>
    )
}

export const UGSearch = ({phrase}) => {
    const [phrase_, setPhrase] = useState("")
    const dispatch = useDispatch()
    const onChange = (newValue) => {
        setPhrase(oldvalue => {
            const lowercase = newValue.toLowerCase()
            if (lowercase.length > 2) {
                dispatch(FetchSearchAsyncAction({str: lowercase}))
            }
            return lowercase
        })
    }
    if (phrase) {
        onChange(phrase)
    }

    const items = useSelector(state => state["items"])
    const anys = (phrase_.length > 2)?Object.values(items).filter(
        i => (i?.fullname || i?.name || '').toLowerCase().includes(phrase_)
    ):[]

    return (
        <>
            <CardCapsule title="Hledání">
                <TextInput value={phrase_} onChange={onChange} />
            </CardCapsule>
            <CardCapsule title="Výsledky">
                {anys.map(i => <ShowResult key={i.id} item={i} />)}
            </CardCapsule>
        </>        
    )
}