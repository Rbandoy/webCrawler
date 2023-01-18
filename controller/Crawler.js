import fetchUrl from "node-fetch";
let Crawler = {};
const notionId = '12345';

Crawler.fetch = async (req, res) => {
  try {
    let { url, search_text, webhook_url } = req.query;

    const response = await fetchUrl(url);
    const body = await response.text();
  
    const isDetected = body.search(search_text) !== -1;
    
    const payload = JSON.stringify({
      URL: url,
      Detection: isDetected,
      NotionId: notionId
    });

    fetchUrl(webhook_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    })
    .then(res => res.json())
    .then(data => {
        res.status(200).json({
          success: true,
          data
        })
    })
    .catch(error => { 
      res.status(500).json({
        success: false,
        data: error.message
      })
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message
    })
  }
}

Crawler.hook = (req, res) => {
  console.log(req.body)
  res.status(200).json({success: true, data: req.body})
}

export default Crawler;