import {
  AgentProtocol,
  BaseAgent,
  createAgent,
  CygwinAgent,
  OpenSSHAgent,
  PageantAgent,
} from "./agent";

import {
  SSHTTPAgent as HTTPAgent,
  SSHTTPSAgent as HTTPSAgent,
} from "./http-agents";

import { parseKey } from "./protocol/keyParser";
import {
  flagsToString,
  OPEN_MODE,
  STATUS_CODE,
  stringToFlags,
} from "./protocol/SFTP";

import client from "./client.js";
import server from "./server.js";

const utils = {
  parseKey,
  sftp: {
    flagsToString,
    OPEN_MODE,
    STATUS_CODE,
    stringToFlags,
  },
};

export {
  AgentProtocol,
  BaseAgent,
  createAgent,
  client as Client,
  CygwinAgent,
  HTTPAgent,
  HTTPSAgent,
  OpenSSHAgent,
  PageantAgent,
  server as Server,
  utils,
};

export default {
  AgentProtocol,
  BaseAgent,
  createAgent,
  Client: client,
  CygwinAgent,
  HTTPAgent,
  HTTPSAgent,
  OpenSSHAgent,
  PageantAgent,
  Server: server,
  utils: utils,
};
