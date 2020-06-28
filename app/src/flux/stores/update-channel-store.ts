import MailspringStore from 'mailspring-store';
import { remote } from 'electron';

const autoUpdater = remote.getGlobal('application').autoUpdateManager;
const preferredChannel = autoUpdater.preferredChannel;

class UpdateChannelStore extends MailspringStore {
  _current = { name: 'Loading...' };
  _available = [{ name: 'Loading...' }];

  constructor() {
    super();
    if (AppEnv.isMainWindow()) {
      this.refreshChannel();
    }
  }

  current() {
    return this._current;
  }

  currentIsUnstable() {
    return this._current && this._current.name.toLowerCase() === 'beta';
  }

  available() {
    return this._available;
  }

  async refreshChannel() {
  }

  async setChannel(channelName) {
    return null;
  }
}

export default new UpdateChannelStore();
