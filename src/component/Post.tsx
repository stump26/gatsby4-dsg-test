import styled from "@emotion/styled";

export interface PostProps {
  id: string;
  identicon: string;
}

const Post = ({ id, identicon }: PostProps) => {
  const icon = `data:image/png;base64,${identicon}`;

  return (
    <Container>
      <Hash>{id}</Hash>
      <Icon src={icon} alt="icon" />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Hash = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const Icon = styled.img`
  width: 200px;
  height: 200px;
`;

export default Post;
