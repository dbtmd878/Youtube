class Youtube {
  constructor(apiKey) {
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    this.key = apiKey;
  }

  async mostPopular() {
    const videos = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`,
      this.requestOptions
    );
    const result = await videos.json();
    return result;
  }
}

export default Youtube;
