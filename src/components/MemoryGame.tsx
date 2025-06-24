import { useEffect, useState } from "react";
import './MemoryGame.css';

interface MemoryGameProps {
  onScoreUpdate: (score: number, gameOver: boolean) => void;
}
interface ImageType {
  id: string;
  url: string;
}

const MemoryGame = ({ onScoreUpdate }: MemoryGameProps) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [clickedImages, setClickedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch ('/images.json');
        const data: ImageType[] = await response.json();
        setImages (data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages()
  }, [])

  const shuffleArray = (array: ImageType[]) => {
    const newArray = [...array];
    return newArray.sort(() => Math.random() - 0.5)
  }

  const handleImageClick = (imageId: string) => {
    if (clickedImages.includes(imageId)) {
      onScoreUpdate(0, true)
      setClickedImages([])
    } else {
      const newClickedImages = [...clickedImages, imageId]
      setClickedImages (newClickedImages)
      onScoreUpdate (newClickedImages.length, false)
    }
    setImages((prevImages) => shuffleArray(prevImages))
  }
  return (
    <div className="imageboard">
      {images.map((image, index) => (
        <img
          key={`${image.id}-${index}`} 
          src={image.url}
          alt={`Card ${image.id}`}
          onClick={() => handleImageClick(image.id)}
        />
      ))}
    </div>
  )
}

export default MemoryGame;