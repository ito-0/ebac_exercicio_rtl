import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testes para o componente App', () => {
    test('Deve renderizar corretamente o componente PostComments', () => {
        // Renderiza o componente App
        render(<App />);

        // Verifica se o componente App está presente na tela
        // Você pode adicionar mais verificações conforme necessário
        expect(screen.getByTestId('post-comments')).toBeInTheDocument();
    });
});
