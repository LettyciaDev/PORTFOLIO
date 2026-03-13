import Image from "next/image";
import Link from "next/link";

export function Nav(){
    return (
        <div className="flex justify-around m-10">
          <div>modo</div>
          <nav>
            <ul className="flex gap-5 drop-shadow-md">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li className="flex gap-1 bg-linear-to-t from-orange-600 to-orange-400 font-bold text-amber-50 pt-1 pb-1 pr-2 pl-2 rounded-2xl">
                <Image src="/game.png" alt="controle remoto" width={20} height={20}
                  />
                  <Link href="/hangman">GAME</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
}