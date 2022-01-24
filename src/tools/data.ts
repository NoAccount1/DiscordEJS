interface Channel {
  name: string;
  id: string;
  webhookID?: string;
  webhookToken?: string;
}

interface Guild {
  name: string;
  id: string;
  channels: [Channel];
}

export default [
  {
    name: "entrePotes",
    id: "901541669726474340",
    channels: [
      {
        name: "Général",
        id: "901541669726474343",
        webhookID: "934032572852363314",
        webhookToken:
          "EOTlNHJJu948UFd-7VUfQOb64omCDfwd1Ki2ERQKFqURI_ObTVVtlYLsT1UYlm0VHgEE",
      },
    ],
  },
  {
    name: "Dev",
    id: "898885394714734613",
    channels: [
      {
        name: "Général",
        id: "898885395293564991",
        webhookID: "933423626055721080",
        webhookToken:
          "lGT0QZ8R3zKYV5BAmMuIMhMHKodb1mw-qID23O--6XgpmqpEbhtiXxkMo8MXzCoY28AF",
      },
    ],
  },
];
