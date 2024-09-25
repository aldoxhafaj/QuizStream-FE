import { Carousel } from '@quiz-stream/components/Carousel';
import { DarkModeToggler } from '@quiz-stream/components/DarkModeToggler';
import { FlexTextBlock } from '@quiz-stream/components/FlexTextBlock';
import { LoginForm } from '@quiz-stream/components/Forms';
import { useIntl } from '@quiz-stream/contexts/IntlContext';
import { Container } from '@quiz-stream/layouts/container';
import { Row } from '@quiz-stream/layouts/row';
import { Text } from '@quiz-stream/layouts/typography';
import { FontSize, TextColor } from '@quiz-stream/layouts/typography/types';
import {
  HorizontalSpacing,
  VerticalSpacing,
} from '@quiz-stream/themes/spacing';

import { useLogin, useLoginCarousel } from './hooks';

export const Login = () => {
  const { formatMessage } = useIntl();
  const { onLoginSubmit } = useLogin();
  const { slides, renderItem } = useLoginCarousel();

  return (
    <Row className="size-full bg-screen" padding={HorizontalSpacing.M}>
      <Row className="w-3/4 rounded-x2 bg-container shadow-x3 sm:w-11/12 md:w-11/12">
        <Row className="w-1/2" padding={HorizontalSpacing.XL}>
          <Carousel
            slides={slides}
            renderItem={renderItem}
            infiniteLoop
            autoplay
          />
        </Row>

        <Container flexGrow={1} padding={HorizontalSpacing.XXXXXL}>
          <Row
            justifyContent="space-between"
            paddingBottom={VerticalSpacing.XS}
          >
            <Text fontSize={FontSize.H2}>
              {formatMessage({
                id: 'quizStreamApp.login.title',
                defaultMessage: 'Login',
              })}
            </Text>
            <DarkModeToggler />
          </Row>

          <FlexTextBlock
            paddingBottom={VerticalSpacing.M}
            primaryText={formatMessage({
              id: 'quizStreamApp.login.subtitle',
              defaultMessage: `Don't have an account?`,
            })}
            secondaryText={formatMessage({
              id: 'quizStreamApp.login.signup',
              defaultMessage: 'Sign up',
            })}
            primaryTextColor={TextColor.LIGHT}
            isSecondaryTextUnderlined
          />

          <LoginForm onSubmit={onLoginSubmit} />
        </Container>
      </Row>
    </Row>
  );
};
