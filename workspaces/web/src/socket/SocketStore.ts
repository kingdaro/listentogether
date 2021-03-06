import {
  deserializeMessage,
  serializeMessage,
  SocketMessage,
} from "@listen-together/shared"
import { observable } from "mobx"

type ConnectionState = "connecting" | "online" | "reconnecting"

const socketUrl = `ws://localhost:4000/api/socket`

export class SocketStore {
  @observable
  connectionState: ConnectionState = "connecting"

  private socket?: WebSocket

  openConnection = () => {
    const socket = (this.socket = new WebSocket(socketUrl))

    socket.onopen = () => {
      this.connectionState = "online"
    }

    socket.onclose = () => {
      this.connectionState = "reconnecting"
      removeSocketListeners()
      setTimeout(this.openConnection, 3000)
    }

    socket.onerror = () => {
      this.connectionState = "reconnecting"
      removeSocketListeners()
      setTimeout(this.openConnection, 3000)
    }

    const removeSocketListeners = () => {
      if (!this.socket) return
      this.socket.onopen = null
      this.socket.onclose = null
      this.socket.onerror = null
      this.socket.onmessage = null
    }

    return () => {
      removeSocketListeners()
      this.socket?.close()
    }
  }

  listen = (handleMessage: (message: SocketMessage) => void) => {
    const listener = ({ data }: MessageEvent) =>
      handleMessage(deserializeMessage(data))

    this.socket?.addEventListener("message", listener)
    return () => this.socket?.removeEventListener("message", listener)
  }

  send = (message: SocketMessage) => {
    this.socket?.send(serializeMessage(message))
  }
}
