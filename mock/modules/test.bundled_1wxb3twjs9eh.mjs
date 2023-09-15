// mock/modules/test.ts
var test_default = [
  {
    url: "/api/get",
    method: "get",
    response: ({ url, body, query, headers }) => {
      return {
        code: 0,
        data: {
          name: "get",
          url,
          body,
          // post
          query,
          // get
          headers
        }
      };
    }
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2e3,
    response: {
      code: 0,
      data: {
        name: "post"
      }
    }
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(void 0));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    }
  }
];
export {
  test_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2R1bGVzL3Rlc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2h1YW5nY2hhby93b3Jrcy9TdHVkeS92dWUtdml0ZS10cy9tb2NrL21vZHVsZXMvdGVzdC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvaHVhbmdjaGFvL3dvcmtzL1N0dWR5L3Z1ZS12aXRlLXRzL21vY2svbW9kdWxlc1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvaHVhbmdjaGFvL3dvcmtzL1N0dWR5L3Z1ZS12aXRlLXRzL21vY2svbW9kdWxlcy90ZXN0LnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5leHBvcnQgZGVmYXVsdCBbXG5cdHtcblx0XHR1cmw6IFwiL2FwaS9nZXRcIixcblx0XHRtZXRob2Q6IFwiZ2V0XCIsXG5cdFx0cmVzcG9uc2U6ICh7IHVybCwgYm9keSwgcXVlcnksIGhlYWRlcnMgfSkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29kZTogMCxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdG5hbWU6IFwiZ2V0XCIsXG5cdFx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdFx0Ym9keTogYm9keSwgLy8gcG9zdFxuXHRcdFx0XHRcdHF1ZXJ5OiBxdWVyeSwgLy8gZ2V0XG5cdFx0XHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHVybDogXCIvYXBpL3Bvc3RcIixcblx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdHRpbWVvdXQ6IDIwMDAsXG5cdFx0cmVzcG9uc2U6IHtcblx0XHRcdGNvZGU6IDAsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdG5hbWU6IFwicG9zdFwiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dXJsOiBcIi9hcGkvdGV4dFwiLFxuXHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0cmF3UmVzcG9uc2U6IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRcdFx0bGV0IHJlcWJvZHkgPSBcIlwiO1xuXHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0cmVxLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IHtcblx0XHRcdFx0XHRyZXFib2R5ICs9IGNodW5rO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVxLm9uKFwiZW5kXCIsICgpID0+IHJlc29sdmUodW5kZWZpbmVkKSk7XG5cdFx0XHR9KTtcblx0XHRcdHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluXCIpO1xuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSAyMDA7XG5cdFx0XHRyZXMuZW5kKGBoZWxsbywgJHtyZXFib2R5fWApO1xuXHRcdH0sXG5cdH0sXG5dIGFzIE1vY2tNZXRob2RbXTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZzogTW9ja0NvbmZpZykge1xuLy8gICByZXR1cm4gW1xuLy8gICAgIHtcbi8vICAgICAgIHVybDogJy9hcGkvdGV4dCcsXG4vLyAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgIHJhd1Jlc3BvbnNlOiBhc3luYyAocmVxLCByZXMpID0+IHtcbi8vICAgICAgICAgbGV0IHJlcWJvZHkgPSAnJ1xuLy8gICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuLy8gICAgICAgICAgIHJlcS5vbignZGF0YScsIChjaHVuaykgPT4ge1xuLy8gICAgICAgICAgICAgcmVxYm9keSArPSBjaHVua1xuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgcmVxLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKHVuZGVmaW5lZCkpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJylcbi8vICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbi8vICAgICAgICAgcmVzLmVuZChgaGVsbG8sICR7cmVxYm9keX1gKVxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICBdXG4vLyB9XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsSUFBTyxlQUFRO0FBQUEsRUFDZDtBQUFBLElBQ0MsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNLE9BQU8sUUFBUSxNQUFNO0FBQzVDLGFBQU87QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBO0FBQUEsVUFDQTtBQUFBO0FBQUEsVUFDQTtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsSUFDQyxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQTtBQUFBLElBQ0MsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYSxPQUFPLEtBQUssUUFBUTtBQUNoQyxVQUFJLFVBQVU7QUFDZCxZQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDOUIsWUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVO0FBQ3pCLHFCQUFXO0FBQUEsUUFDWixDQUFDO0FBQ0QsWUFBSSxHQUFHLE9BQU8sTUFBTSxRQUFRLE1BQVMsQ0FBQztBQUFBLE1BQ3ZDLENBQUM7QUFDRCxVQUFJLFVBQVUsZ0JBQWdCLFlBQVk7QUFDMUMsVUFBSSxhQUFhO0FBQ2pCLFVBQUksSUFBSSxVQUFVLE9BQU8sRUFBRTtBQUFBLElBQzVCO0FBQUEsRUFDRDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
