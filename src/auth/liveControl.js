import { liveState } from "../data/live";

export function setLiveStatus(status) {
  liveState.status = status;
}

export function setLiveTitle(title) {
  liveState.title = title;
}

export function setLiveTime(time) {
  liveState.startTime = time;
}

export function startLive() {
  liveState.status = "live";
}

export function scheduleLive(time) {
  liveState.status = "scheduled";
  liveState.startTime = time;
}

export function stopLive() {
  liveState.status = "offline";
}