import { observer } from "mobx-react-lite"
import React, { useEffect, useMemo } from "react"
import { SocketStore } from "../socket/SocketStore"
import AddTrackForm from "../track/AddTrackForm"
import TrackList from "../track/TrackList"
import { RoomStore } from "./RoomStore"

type Props = {
  slug: string
  socketStore: SocketStore
}

function RoomPage(props: Props) {
  const store = useMemo(() => new RoomStore(props.slug, props.socketStore), [
    props.slug,
    props.socketStore,
  ])

  useEffect(() => store.requestTracks(), [store])
  useEffect(() => store.addSocketListener(), [store])

  return (
    <main>
      <AddTrackForm onAddTrack={store.addYoutubeTrack} />
      <TrackList tracks={store.tracks} />
    </main>
  )
}

export default observer(RoomPage)
