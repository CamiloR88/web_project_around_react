class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }
  setProfileInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: this._token,
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
  setProfileAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        Authorization: this._token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => res.json());
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: this._token,
      },
    }).then((res) => res.json());
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization: this._token,
      },
    }).then((res) => res.json());
  }
  storeCard(name, link) {
    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization: this._token,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, link }),
    }).then((res) => res.json());
  }
  setLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      headers: {
        Authorization: this._token,
        "content-type": "application/json",
      },
      method: "PUT",
    }).then((res) => res.json());
  }

  rmvLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      headers: {
        Authorization: this._token,
        "content-type": "application/json",
      },
      method: "DELETE",
    }).then((res) => res.json());
  }
  rmvCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      headers: {
        Authorization: this._token,
      },

      method: "DELETE",
    });
  }
}

const api = new Api(
  "https://around-api.es.tripleten-services.com/v1",
  "23063b23-56ac-4b08-80f3-d33202acf81b",
);
export { api };
