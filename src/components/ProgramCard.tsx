import styled from 'styled-components';
import ProgramPrice from './ProgramPrice';

const ProgramCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 33.55rem;

  margin: 2.5rem 0 1rem 0;
`;

const ProgramImageSection = styled.div`
  position: relative;
  border-radius: 0.8rem;
  width: 33.5rem;
  height: 17rem;
  background-color: black;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    left: 1rem;
    top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.5rem;
    height: 2.5rem;

    background-color: #fd7473;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const ClassInfoSection = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  span:nth-child(1) {
    margin-right: 1rem;
    font-weight: 700;
    font-size: 1.4rem;

    color: rgba(10, 10, 10, 0.5);
  }

  span:nth-child(2) {
    height: 1.8rem;
    border: 0.5px solid rgba(10, 10, 10, 0.4);
    border-radius: 2px;

    font-weight: 600;
    font-size: 1.2rem;
    color: rgba(10, 10, 10, 0.5);

    padding: 0.3rem;
  }
`;

const ProgramTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;

  margin-top: ${(props: { topMargin: boolean }) => (props.topMargin ? '1rem' : '0')};
`;

const ProgramLocation = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0.5rem 0 0.5rem 0;
  color: rgba(10, 10, 10, 0.8);
`;

const ProgramPriceSection = styled.div`
  margin: 1.2rem 0;
`;

interface ProgramCardProps {
  id: string;
  programImage: string;
  title: string;
  isDeadlineComingUp?: boolean;
  ageRange?: string;
  isOnline?: boolean;
  location?: string;
  originalPrice: number;
  price: number;
  discountPercentage?: number;
  dateTime?: string;
  isCoaching: boolean;
  handleCardClick: (title: string) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = props => {
  const {
    programImage,
    isDeadlineComingUp = false,
    ageRange,
    isOnline,
    title,
    location,
    originalPrice,
    price,
    discountPercentage,
    dateTime,
    handleCardClick,
    isCoaching,
    id,
  } = props;

  return (
    <ProgramCardWrapper onClick={() => handleCardClick(id)} id={id}>
      <ProgramImageSection>
        <img alt="program image" src={programImage} />
        {isDeadlineComingUp && <div>마감임박</div>}
      </ProgramImageSection>
      {!isCoaching && (
        <ClassInfoSection>
          <span>{isOnline ? '온라인' : '오프라인'}</span>
          <span>{ageRange}</span>
        </ClassInfoSection>
      )}
      <ProgramTitle topMargin={isCoaching}>{title}</ProgramTitle>
      {location && <ProgramLocation>{location}</ProgramLocation>}
      {dateTime && <ProgramLocation>{dateTime}</ProgramLocation>}
      <ProgramPriceSection>
        <ProgramPrice
          discountPercentage={discountPercentage}
          price={price}
          originalPrice={originalPrice}
        />
      </ProgramPriceSection>
    </ProgramCardWrapper>
  );
};

export default ProgramCard;
