import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import VideoList from "../components/VideoList";
import Video from "../components/Video";
import Button from "../components/Button";
import { PokemonData } from "../components/About";
import Home from "../components/Home";
import Link from "next/link";
import FormControlado from "./FormControlado";
import PostForm from "./PostForm";
import PostNoRel from "./PostNoRel";
import PatchNoRel from "./PatchNoRel";
import PutNoRel from "./PutNoRel";
import DeleteNoRel from "./DeleteNoRel";
import GetRel from "./GetRel";
import Layout from "./Layout";

interface HokkProps {
  datos: PokemonData;
}



interface Ingrediente {
    id: number;
    pan: boolean;
  }
  //Definir las interfaces fuera del Componente es una buena Practica en React.
const Hokk: React.FC<HokkProps> = ({ datos }) =>{
  const [message, setMessage] = useState('Loading...');
  const [alimentos, setAlimentos] = useState<string[]>([]);
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  

  useEffect(()=>{
    fetch('http://localhost:8080/')
    .then(
      response => response.json()
    )
    .then(
      data => {
      console.log(data);
      setMessage(data.message);
      setAlimentos(data.alimentos);
      setIngredientes(data.ingredientes);
      });
    }, []);



  return (
    <div>
      <div>{message}</div>
      {
        alimentos.map((alimento:string) =>
          <div key={alimento.toString()}>
            {alimento}
          </div>
        )
      }
      {
        ingredientes.map((ingrediente: Ingrediente) =>
          <div key={ingrediente.id}>
            id:{ingrediente.id}, 
            pan:{ingrediente.pan.toString()}
          </div>
        )
      }
      <Fragment>
        <VideoList title="Videos 1">
          <Video title="Abejas" duration={2345} uploadDate={new Date()} descripcion="las abejas"/>
          <Video title="Lagartos" duration={4567} uploadDate={new Date(2024,1,25)} descripcion="los Lagartos"/>
        </VideoList>
        <br></br>
        <VideoList title="Videos 2">
          <Video title="Fideos" duration={1344} uploadDate={new Date()} descripcion="video fideos"/>
          <Video title="Sorrentinos" duration={3421} uploadDate={new Date(2024,3,16)} descripcion="video sorrentinos"/>
        </VideoList>
      </Fragment>
      <div>
            <Button datos={datos} />
      </div>
      <div>
        <button>
          <Link href="http://localhost:8080/rutas/home">Redirect a Ruta Back</Link>
        </button>
      </div>
      <div>
        <Home message="mensaje x defecto" numero={6}/>
      </div>
      <div>
        <FormControlado email="" password=""/>
      </div>
      <div>
        <PostForm />
      </div>
      <div>
        <PostNoRel pass='' email='' name='' fecha='' age={0} activo={false} />
      </div>
      <div>
        <PatchNoRel pass='' name='' activo={false} />
      </div>
      <div>
        <PutNoRel _id='' pass='' email='' name='' fecha='' age={0} activo={false}/>
      </div>
      <div>
        <DeleteNoRel pass='' name=''/>
      </div>
      <div>
        <GetRel edad={0} />
      </div>
      <div>
        <Layout>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eveniet consequatur numquam quam. A id qui nemo, voluptates odio et labore. Nisi facilis sit iusto mollitia, doloremque consectetur quas odio quaerat minus quibusdam obcaecati voluptates vel nam enim repudiandae distinctio itaque possimus nobis cum ipsam vero veritatis. Tempore dolorum nobis ratione, dolorem molestias nisi maxime adipisci aspernatur nam explicabo officia, vero quae? Vitae cupiditate ullam ipsa, necessitatibus voluptatem fugit. Cum numquam officiis molestiae excepturi quisquam ad aliquid ipsam quas consectetur necessitatibus! Optio eius hic possimus labore ea repellat aut in commodi est! Fugit laboriosam recusandae, animi sit delectus nesciunt voluptates fuga a magni accusantium itaque nostrum ipsa repudiandae facilis quo voluptate consequatur dolor officiis nihil cumque laborum iure! Provident, ipsam neque rem ex quas repellat aliquid magnam fugiat facere culpa nihil architecto, quis distinctio perferendis dolorum magni maxime et numquam autem! Commodi odio nesciunt sint odit libero repellendus recusandae accusamus asperiores autem voluptatibus at natus iusto tempore reiciendis nulla modi obcaecati tenetur soluta consequuntur hic assumenda, maiores eius. Provident pariatur debitis architecto similique laborum deserunt quibusdam eos eligendi, nesciunt delectus odio, possimus non aliquid sint vel officiis. Quae, rerum non voluptatem quidem nisi dolorem quis culpa numquam dignissimos, magnam ratione, hic quasi minima possimus itaque. Expedita qui impedit repellendus amet nihil quae aliquam eveniet ipsa optio libero in, ex magni rem iure repellat hic possimus assumenda dicta mollitia fuga nemo tempore deserunt doloribus! Exercitationem magnam, praesentium ut doloremque magni dolores, nesciunt natus doloribus saepe quos sint dolorem tempore voluptatem voluptate, hic perferendis voluptatibus quam. Cupiditate corrupti perferendis ducimus hic debitis tempora asperiores voluptatum praesentium omnis officiis quidem perspiciatis sint non aliquam, quibusdam atque vel quam similique doloribus porro cumque tempore quae ipsam. Saepe corrupti ullam dignissimos architecto veritatis iusto non omnis id nihil adipisci nemo modi optio alias at consequuntur, fuga eius? Neque maiores voluptatum aliquid nostrum, esse asperiores, dolorem quae ea cum labore consequatur! Voluptatum, sed ab asperiores reiciendis inventore nulla est sequi distinctio quia sint fugit dolores officiis aperiam iure numquam! Dolore, asperiores sint! Iure hic eius corporis tempora accusantium sint quasi ipsam dolorum dicta, harum obcaecati, veritatis rem error! Sapiente totam enim molestiae impedit, praesentium beatae ipsam reprehenderit quod amet esse, fugit consequatur quae tempora placeat porro consequuntur. Distinctio ducimus cum ipsam temporibus iusto itaque illo, accusamus ea culpa dignissimos corporis nesciunt laboriosam at iste nulla voluptate accusantium eos ipsa laudantium expedita fuga debitis earum? Blanditiis eum, voluptatibus id aliquam in, quibusdam totam cum nostrum earum unde veritatis autem accusantium ratione et. Beatae doloremque enim perspiciatis similique repellat dignissimos ut autem vitae in debitis voluptates itaque veritatis molestias assumenda exercitationem laborum consequatur accusantium, ipsa deleniti, odit ducimus suscipit eius saepe. Debitis praesentium neque fugit? Molestias quibusdam veritatis deleniti aspernatur doloribus blanditiis necessitatibus nisi labore iste, enim, ipsum, voluptatem aperiam atque quos ut quaerat. Accusamus tempore voluptate architecto eaque enim quidem eveniet iure, molestiae ea illo sapiente? Mollitia fuga rerum placeat non omnis obcaecati tempora reprehenderit et quod? Aut dolore ipsum suscipit, facilis nam culpa quia quidem ducimus, voluptas dolorum, vitae iusto? Eius, vitae exercitationem. Consequatur est voluptatibus dolores alias corrupti, perspiciatis recusandae blanditiis tenetur, ea error suscipit possimus magni libero similique! Sint eos animi totam consequuntur temporibus quibusdam consectetur. Iste ratione dicta, ab commodi eaque minus sapiente nemo illo quisquam repellat, modi cumque cupiditate quasi? Doloremque fugiat sapiente natus cum, ipsa dolores amet minus fugit, tempora similique voluptatibus, nam praesentium! Alias sit repellat molestiae quaerat, voluptatibus delectus. Amet fuga labore corporis, corrupti eius asperiores reprehenderit saepe quae dignissimos accusantium rerum, adipisci voluptatibus, error ipsa! Corporis ab impedit error distinctio saepe quam voluptates labore facilis et, eum officia tenetur hic, voluptas, beatae repudiandae recusandae eaque mollitia. Quaerat maiores, voluptatibus quos tenetur architecto dolore facilis odio cumque itaque quo vel natus ratione a accusamus ex suscipit magni aut illo quidem beatae unde. Alias ducimus recusandae consequatur ratione eos ipsam vero similique animi accusamus, quia rerum mollitia, aut, sunt molestiae. Minima molestiae dolor iure iusto debitis aperiam itaque earum fugit, quod magni error sapiente nobis voluptatibus labore consequuntur ipsa? Officiis eum facere atque nam in? Adipisci quam quisquam odio quidem neque, repellendus blanditiis fuga, accusantium id deleniti iste ad assumenda, sequi similique veritatis esse minus veniam vero qui. Optio facere, perspiciatis neque fugit veniam dignissimos, vero corrupti temporibus voluptatum quas eligendi unde. Maiores perspiciatis commodi modi mollitia iste, quidem provident quis sapiente? Veniam voluptas, voluptates incidunt itaque velit perferendis quia recusandae debitis at modi eos! Amet modi voluptates veritatis? Rem iure qui reprehenderit exercitationem odio facilis ut incidunt labore eum sequi asperiores praesentium accusantium ullam beatae ipsum quibusdam, sunt pariatur. Quibusdam distinctio excepturi deleniti numquam delectus est voluptas! Inventore odit recusandae mollitia accusantium esse vitae qui velit at obcaecati itaque, odio sit omnis soluta eveniet placeat laborum commodi consectetur voluptatibus! Minus aliquam, odio harum explicabo culpa soluta, dolorem adipisci sunt delectus id mollitia excepturi maiores et asperiores illum rem velit quo unde doloremque perferendis consequatur ratione? Error architecto neque officiis earum veritatis dicta tempore iste eligendi odit quisquam optio, in, pariatur eveniet, quam fugit distinctio! Culpa fugit unde esse molestias illo expedita dolorum non ab suscipit accusantium aliquam ut, molestiae, ad sapiente. Eligendi atque quasi repudiandae deserunt omnis expedita dicta praesentium quae ipsam saepe. Tempore ad optio tenetur sapiente veniam nisi aliquid sunt officiis libero earum, officia rem natus. Temporibus quam molestiae quisquam provident corrupti aliquam porro fuga debitis voluptate ducimus, esse consequuntur nam, culpa repellendus qui, at doloremque non fugit necessitatibus. Eos omnis modi voluptatum necessitatibus voluptate illum, adipisci distinctio, autem, quisquam culpa earum. Distinctio ipsam tempora modi sit? Fuga perspiciatis unde distinctio corrupti suscipit, illo similique aut quod eaque voluptatibus necessitatibus ab itaque voluptates quia sint minus alias facilis enim iusto qui! Iusto beatae odio sint accusantium facilis dolorum similique ea ducimus vero pariatur? Non facilis, vel modi harum maiores quisquam iusto tempora maxime quibusdam architecto qui vitae ab at. Nam repellat a corporis corrupti, sit eaque quas quo at quia vitae perspiciatis quod molestias alias dignissimos quaerat non nisi eveniet dolorum unde accusamus, libero eum mollitia autem maxime. A minus quo ad ducimus, similique vel! Repudiandae delectus enim totam illo dolorum sequi debitis distinctio, omnis deleniti vitae iure, hic velit ratione odit rem dolor ipsam, sunt harum doloribus explicabo tempore! Ipsa harum asperiores vel reprehenderit inventore blanditiis animi dolorum ipsam illo provident quod cumque sunt quaerat unde ex ipsum, minima perferendis reiciendis magnam necessitatibus error corporis beatae repellendus temporibus. Obcaecati minima reiciendis labore aspernatur sint rem expedita vero nam atque, beatae saepe optio incidunt voluptates ducimus laborum perspiciatis esse neque, commodi, eaque ea repellat? Impedit quasi, iure voluptatum accusantium harum inventore ad quos facere, tempora expedita quae, excepturi iusto. Explicabo repudiandae autem illo dolores quam reiciendis reprehenderit iste aspernatur pariatur voluptates quas, deserunt voluptatem provident culpa ea rerum eligendi similique aut excepturi consequuntur illum obcaecati distinctio assumenda laboriosam. Earum pariatur velit, fuga obcaecati nobis, cupiditate optio, autem assumenda voluptatum facilis quibusdam odit repudiandae saepe porro doloribus quidem? Magnam ipsam aliquam vitae quia doloremque. Nesciunt voluptates eius accusantium ducimus unde, asperiores architecto exercitationem nemo perspiciatis blanditiis, soluta necessitatibus iste corrupti harum reprehenderit dolore quia? Incidunt ad est assumenda ducimus aperiam hic, at dolor velit saepe error odio iste cumque a, magnam similique voluptate? Perferendis consequuntur incidunt fuga eveniet quaerat aspernatur pariatur atque nisi! Accusamus ab, consequuntur ut iste at soluta illum nihil expedita nesciunt consequatur reiciendis aspernatur qui quaerat dolores eligendi placeat praesentium aliquid provident recusandae assumenda error vero. Eum temporibus error libero amet deserunt ipsum, voluptate velit porro tenetur cum deleniti numquam voluptates voluptatum a. Magni unde voluptatem ullam tenetur quisquam quas tempora praesentium in, ducimus omnis fugit veniam corporis error distinctio, ipsa esse saepe. Accusamus dolore vel quis voluptatum maiores officiis, harum neque repellat voluptatem veritatis pariatur sequi temporibus, ducimus incidunt cum, architecto sed! Inventore fuga repellat blanditiis nostrum beatae maiores, doloribus optio laudantium distinctio qui odit rem quis animi commodi voluptatibus sint aperiam ipsam fugit natus. Provident placeat dolores ab voluptate quam minima architecto eligendi ullam sequi possimus adipisci maxime soluta deserunt labore, reprehenderit dolorum iste nam nemo odio officiis molestias? Quibusdam perferendis quisquam, est esse ipsum quos qui non veritatis labore quas laborum inventore delectus laudantium dolorum enim obcaecati, repellendus incidunt odio ipsa excepturi ipsam nemo dolorem explicabo dolores. Maiores ipsum repellendus quod ipsam saepe accusamus velit, tempora eum repellat error laudantium doloribus, voluptate repudiandae magni explicabo non asperiores quis nulla. Harum obcaecati dolor est dolorem architecto velit nemo tempore assumenda eaque quae neque error sint mollitia reprehenderit pariatur odio corporis quasi earum, doloribus repellendus. Odio beatae obcaecati ex? Hic praesentium eaque distinctio? Nostrum, provident? Nobis, provident possimus? Eius, corporis aperiam! Labore, eveniet consequatur nihil in incidunt deleniti minus aspernatur dignissimos excepturi ab laborum inventore voluptatum omnis pariatur temporibus ea fugiat quisquam placeat tempora cupiditate quidem. Sint in soluta culpa corporis, exercitationem magnam cupiditate tempora architecto! Velit facilis beatae ipsa autem? Neque corporis perspiciatis expedita natus dolores laboriosam, ea, maxime sed, sunt dolorem ipsa illo aliquid et? Quae amet, culpa ex aperiam quibusdam aliquam obcaecati consectetur dolore, officia incidunt soluta architecto? Numquam sunt minus corporis dicta non, quaerat eius praesentium cumque nemo deserunt maxime ut quas quos odio officiis. Distinctio ut corporis nulla, rem maxime necessitatibus quisquam sunt culpa repudiandae alias inventore asperiores soluta incidunt magnam, laudantium sit fugiat ab corrupti iste accusantium adipisci recusandae! Fuga delectus quam quasi iste consequuntur recusandae iure maiores, a vitae inventore nemo. Voluptatum doloremque corporis vitae itaque ipsam aspernatur temporibus, perferendis debitis quaerat iure! Numquam reprehenderit itaque aliquam voluptates vel dolorem aliquid voluptas distinctio, quasi officia sit cupiditate autem magnam sed similique porro perspiciatis quisquam in quibusdam fugit quo illum odio. In asperiores porro molestiae tempore repellendus neque molestias id cumque libero non blanditiis, quae illum sint. Hic minima enim cum dolor iste voluptatibus temporibus debitis sequi ipsum. Non et iste dignissimos quia. Harum iure commodi deserunt officiis corrupti, animi vel accusamus magnam quae necessitatibus quaerat fugiat! Suscipit id repudiandae ullam neque, pariatur quod sunt obcaecati animi consequatur sapiente laboriosam ut repellat officia! Eos, quo. Molestias sapiente dolores blanditiis excepturi? Laborum quam perferendis repellendus fuga ullam amet maiores fugiat ipsum repellat impedit. Accusamus inventore perspiciatis non mollitia, sed impedit culpa consequatur numquam, sit excepturi atque expedita recusandae earum iusto quisquam assumenda nobis! Odit accusantium eligendi eum id, eos rem at fugiat impedit aperiam reprehenderit soluta perferendis error consequatur, vitae earum animi delectus culpa consequuntur quam omnis consectetur. Totam amet explicabo modi id eius rerum fugit repellat. Minus ullam hic ea, alias numquam unde accusantium debitis rerum id quasi, sit soluta est incidunt aperiam? Dolore, vel! Provident dolore possimus vero beatae voluptas exercitationem suscipit, officiis dolorum sed nulla, dolor debitis ratione nesciunt nostrum? Exercitationem totam nostrum natus adipisci facere illum quae facilis odio, ab modi iste ex. Amet aspernatur fuga illum nulla nam. Saepe nulla facilis nobis fugit hic tempora libero debitis voluptas nesciunt ipsam? Culpa sapiente, ut alias consectetur error rem debitis facilis, ad iste necessitatibus similique vel id eveniet cupiditate hic doloribus consequuntur adipisci doloremque ratione nobis ullam molestiae sequi dolor. Labore reiciendis error quidem dolore culpa saepe voluptates asperiores reprehenderit! Libero reiciendis nam inventore nobis earum ad enim cupiditate neque commodi, doloremque dolorum deserunt voluptas debitis perspiciatis eligendi non quasi, porro, impedit reprehenderit possimus voluptatibus dolore minima odio. Alias at quia perferendis sed debitis culpa quo ullam earum, minus provident dolorum velit veniam corporis animi beatae aperiam, nostrum magni ab officiis fuga laudantium amet. Dignissimos ullam at fuga atque dicta quidem cum veritatis eius iure illo asperiores consequatur officiis eos libero dolores, voluptatem inventore odio maxime laborum. Non vel pariatur nostrum numquam perspiciatis omnis, et eaque fugiat tempora error, ut voluptate hic dignissimos sapiente ratione ipsa distinctio modi laboriosam odit sint. Doloremque alias quas, pariatur reprehenderit consectetur adipisci doloribus autem quod hic ducimus amet. Facilis mollitia veniam ullam rerum numquam dolores, fugit ea, impedit nobis, quos doloremque non delectus dignissimos aperiam dicta repellat labore odio at deserunt cumque facere repudiandae? Et a inventore hic voluptate quam totam laborum ullam suscipit, accusamus, repellat labore modi natus officiis, quo voluptatibus harum omnis. Quo cupiditate explicabo nobis dicta rem?</p>
        </Layout>
      </div>
    </div>
  )
}

export default Hokk