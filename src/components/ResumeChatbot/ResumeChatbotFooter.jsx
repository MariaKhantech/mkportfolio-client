import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import ChatbotInput from './ChatbotInput';

function ResumeChatbotFooter({ question, setQuestion, data, fetchData }) {
  return (
    <CardOverflow variant="soft">
      <Divider inset="context" />
      <CardContent orientation="horizontal">
        <ChatbotInput
          question={question}
          setQuestion={setQuestion}
          fetchData={fetchData}
        />

        <span>{data}</span>
      </CardContent>
    </CardOverflow>
  );
}
export default ResumeChatbotFooter;
