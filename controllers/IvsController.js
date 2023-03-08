const IVSBroadcastClient = require('amazon-ivs-player');

const client = IVSBroadcastClient.create({
  // Enter the desired stream configuration
  streamConfig: IVSBroadcastClient.BASIC_LANDSCAPE,
  // Enter the ingest endpoint from the AWS console or CreateChannel API
  ingestEndpoint:
    'rtmps://d431ae37b260.global-contribute.live-video.net:443/app/',
});

async function handlePermissions() {
  let permissions = {
    audio: false,
    video: false,
  };
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    for (const track of stream.getTracks()) {
      track.stop();
    }
    permissions = { video: true, audio: true };
  } catch (err) {
    permissions = { video: false, audio: false };
    console.error(err.message);
  }
  // If we still don't have permissions after requesting them display the error message
  if (!permissions.video) {
    console.error('Failed to get video permissions.');
  } else if (!permissions.audio) {
    console.error('Failed to get audio permissions.');
  }
}
