import React from 'react';
import { screen, render, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { mockData } from '../../mocks/mockData';
import DiaporamaExpositions from './DiaporamaExpositions';

test('First render in the browser with mockData from window.__INITIAL_DATA__ ',
  async () => {
    window.__INITIAL_DATA__ = mockData;
    render(
      <MemoryRouter>
        <DiaporamaExpositions
          height="375px"
          //  oeuvreData={mockData}
          width="auto"
        //  isBrowser={true}
        />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
  })

test('Second render in the browser with mockData from fetch query',
  async () => {
    render(
      <MemoryRouter>
        <DiaporamaExpositions
          height="375px"
          width="auto"
        />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });
  })

test('Manual slider with fake timer', async () => {
  window.__INITIAL_DATA__ = mockData;
  jest.useFakeTimers();
  render(
    <MemoryRouter>
      <DiaporamaExpositions
        height="375px"
        width="auto"
      />
    </MemoryRouter>,
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Turner' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'du 2020-08-01 au 2022-08-01' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Musée du Louvre' })).toBeInTheDocument();
  });

  act(() => { jest.advanceTimersByTime(2000) });
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Renoir' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'du 2020-08-01 au 2022-11-01' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Musée du Louvre' })).toBeInTheDocument();
  });
  act(() => { jest.advanceTimersByTime(2000) });
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Otto Freundlich ou l\'humanisme réinventé' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'du 2022-09-01 au 2022-12-01' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Musée du Louvre' })).toBeInTheDocument();
  });
  jest.useRealTimers();
})


test('Pressing left/right button while automatic slider', async () => {
  window.__INITIAL_DATA__ = mockData;
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <DiaporamaExpositions
        height="375px"
        width="auto"
      />
    </MemoryRouter>
  )
  await waitFor(() => expect(screen.getByRole('heading', { name: 'Turner' })).toBeInTheDocument());
  await new Promise((c) => setTimeout(c, 2000));
  expect(await screen.findByRole('heading', { name: 'Renoir' })).toBeInTheDocument();
  user.click(screen.getByTestId('RightButtonTest'));
  user.click(screen.getByTestId('RightButtonTest'));
  await waitFor(() => expect(screen.getByRole('heading', { name: "Augustin Lesage, la peinture médiumnique" })).toBeInTheDocument());
  user.click(screen.getByTestId('LeftButtonTest'));
  expect(await screen.findByRole('heading', { name: "Otto Freundlich ou l'humanisme réinventé" })).toBeInTheDocument();
})
