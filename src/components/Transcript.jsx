import styled from 'styled-components'
const Transcript = () => {
  return (
    <TranscriptContainer>
        <h4>Transcript</h4>
        <select name="Language" id="language">
            <option selected value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
        </select>
        <div className="transcript-window">
            <article className="timestamp">
                <p>0:00</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti praesentium nostrum rem accusantium impedit deserunt corporis ab aperiam, culpa molestiae?</p>
            </article>
        </div>
    </TranscriptContainer>
  )
}
const TranscriptContainer = styled.div`
    width:100%;
    margin-top: ${props => props.MTOp || "0px"};
`
export default Transcript