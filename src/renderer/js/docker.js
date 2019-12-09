import Docker from 'dockerode'
// import fs from 'fs'
import notify from './notify'
// import { DOCKER_ENGINE_UNIX_SOCKET } from './constants/DockerConstants'

// var socket = process.env.DOCKER_SOCKET || DOCKER_ENGINE_UNIX_SOCKET
// var stats

// try {
//   stats = fs.statSync(socket)
//   if (!stats.isSocket()) {
//     notify('Are you sure the docker is running?')
//   }
// } catch (e) {
//   notify(e)
// }

// var docker = new Docker({ socketPath: socket })
var docker = new Docker({ protocol: 'http', host: '127.0.0.1', port: 2375 })
notify('New Docker Engine Obtained.')

export default docker
