import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../Post'
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByTestId('post-comments')).toBeInTheDocument();
    })

describe('Teste para o componente Post', () => {
    it('Deve adicionar e renderizar dois comentários corretamente', () => {
        render(<Post imageUrl="https://www.example.com/image.jpg" alt="Texto alternativo da imagem">Texto do post</Post>);      
          // Encontra o textarea e insere o primeiro comentário
        const textarea = screen.getByTestId('post-comments-textarea');
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
          // Encontra o botão e submete o formulário
        const button = screen.getByTestId('post-comments-button');
        fireEvent.click(button);
          // Verifica se o primeiro comentário foi renderizado
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
          // Insere o segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
          // Verifica se o segundo comentário foi renderizado
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        });
    })
})