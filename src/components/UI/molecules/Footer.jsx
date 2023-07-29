import React from 'react';
import { eazilogo } from "../../../assets";
import { footerLinks, socialLink } from "../../../constants";
import styles from "../../style";

const Footer = () => (
	<section className={`${styles.flexCenter} py-6 sm:py-16 flex flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-1 flex flex-col justify-start">
				<img
					src={eazilogo}
					className="w-[180px] h-[70px] object-contain"
					alt="payeazy logo"
				/>
				<p className={`${styles.paragraph} mt-2 max-w-[420px]`}>
					With the write payment platform, you can focus on improving your
					business and connecting to more individuals and businesses round the
					world
				</p>
			</div>

			<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((footerLink) => (
					<div
						key={footerLink.key}
						className="flex flex-col ss:my-0 my-4 min-w-[150px]"
					>
						<h4 className="text-white font-cabin font-semibold text-[20px] leading-[26px]">
							{footerLink.title}
						</h4>
						<ul className="mt-4 list-none">
							{footerLink.links ? (
								footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={`font-cabin font-normal text-[18px] leading-[24px] text-dimWhite hover:text-[#62B790] cursor-pointer ${
											index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
										} `}
									>
										{link.name}
									</li>
								))
							) : (
								<li>NO Links Available</li>
							)}
						</ul>
					</div>
				))}
			</div>
		</div>

        <div className='flex flex-row flex-1 justify-between w-full items-center md:flex-row pt-6 border-t-[1px] border-gray-600'>
            <p className='text-white font-cabin text-[20px] leading-[32px] '>2023 Payeazy. All Rights Reserved.</p>

            <div className='flex flex-row md:mt-0 mt-6'>
                {socialLink.map((social, index) => (
                    <img src={social.icon} key={social.id} alt={social.id}  className={`${index !== socialLink.length -1 ? 'mr-6': 'mr-0'}`}/>
                ))}
            </div>
        </div>
	</section>
);


export default Footer;

