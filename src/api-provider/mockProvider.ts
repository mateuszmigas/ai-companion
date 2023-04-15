import { ApiProvider } from "./apiProvider";

const mockData = `
To pass extra arguments to webpack command, you can use the \`--env\` flag followed by a JSON object containing the extra arguments. For example:

\`\`\`bash
webpack --env.production=true --env.API_URL=https://example.com/api
\`\`\`

In the webpack configuration file, you can access these extra arguments using \`process.env\` object. For example:

\`\`\`javascript
module.exports = env => {
  const isProduction = env.production === true;
  const apiUrl = env.API_URL || 'https://localhost:3000/api';

  // ... rest of the configuration
};
\`\`\`
`;
const mockData2 = `To create a CSS blinking animation, you can use the CSS \`animation\` property along with the \`@keyframes\` rule.

Here's an example of how to create a blinking animation:

\`\`\`javascript
/* Define the animation */
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

<dupa>

/* Apply the animation to the element */
.blink {
  animation: blink 1s ease-in-out infinite;
}
\`\`\`


In this example, we define a keyframe animation called \`blink\` that changes the opacity of the element from 1 to 0 and back to 1. We then apply this animation to an element with the class \`blink\` and set it to run for 1 second, with an ease-in-out timing function, and repeat infinitely.

You can customize the animation by changing the animation duration, timing function, or keyframe values to achieve different effects.`;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockProvider implements ApiProvider {
  async readCompletionStream(
    prompt: string,
    onData: (chunk: string, isLast: boolean) => void
  ) {
    const length = mockData.length;
    const chunkSize = 10;

    for (let i = 0; i < length; i += chunkSize) {
      await sleep(10);
      onData(mockData.slice(i, i + chunkSize), false);
    }
    onData("", true);
  }
  getName() {
    return "Mock api";
  }
}
